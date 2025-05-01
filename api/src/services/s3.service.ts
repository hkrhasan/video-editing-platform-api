import { S3Client, PutObjectCommand, GetObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';
import path from 'path';
import os from 'os';
import fs from 'fs';
import { config } from '../config';
import { Readable } from 'stream';

export class S3Service {
  private s3 = new S3Client({
    region: config.aws.region,
    credentials: {
      accessKeyId: config.aws.accessKeyId,
      secretAccessKey: config.aws.secretAccessKey
    }
  });

  async upload(
    filePath: string,
    options?: {
      prefix?: string;       // e.g. "videos/{videoId}"
      mimetype?: string;
      buffer?: Buffer;
    }
  ): Promise<string> {
    const { prefix = '', mimetype } = options || {};
    const buffer = options?.buffer || fs.createReadStream(filePath);
    const base = path.basename(filePath);
    // Build the S3 key: e.g. "videos/1234/original.mp4"
    const key = path.posix.join(prefix, base);

    const command = new PutObjectCommand({
      Bucket: config.aws.bucketName,
      Key: key,
      Body: buffer,
      ContentType: mimetype
    });
    const response = await this.s3.send(command);
    console.log("Uploaded response: ", response)
    return key;
  }



  public async download(key: string): Promise<string> {
    const fileExt = path.extname(key);
    const baseName = path.basename(key, fileExt);
    const tempName = `${baseName}_${Date.now()}${fileExt}`;


    const tempPath = path.join(os.tmpdir(), tempName);
    const getObject = new GetObjectCommand({ Bucket: config.aws.bucketName, Key: key });
    const response = await this.s3.send(getObject);

    if (!response.Body || !(response.Body instanceof fs.ReadStream || response.Body instanceof Buffer)) {
      // @ts-ignore: stream type
      const stream = response.Body as any;
      await new Promise<void>((resolve, reject) => {
        const file = fs.createWriteStream(tempPath);
        stream.pipe(file)
          .on("finish", () => resolve())
          .on("error", (err: Error) => reject(err));
      });
    } else {
      // For Buffer bodies
      const data = response.Body as Buffer;
      fs.writeFileSync(tempPath, data);
    }
    return tempPath;
  }


  public async getStream(key: string): Promise<Readable> {
    try {
      const getObject = new GetObjectCommand({
        Bucket: config.aws.bucketName,
        Key: key
      });

      const response = await this.s3.send(getObject);

      if (!response.Body) throw new Error("Empty response body from s3")

      return response.Body as Readable
    } catch (error) {
      throw error;
    }
  }


  public async getContentType(key: string): Promise<string> {
    const headCommand = new HeadObjectCommand({
      Bucket: config.aws.bucketName,
      Key: key,
    })
    const response = await this.s3.send(headCommand);
    return response.ContentType || 'application/octet-stream';
  }
}
