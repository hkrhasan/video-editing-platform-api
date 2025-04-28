import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { config } from '../config';
import path from 'path';

export class S3Service {
  private s3 = new S3Client({
    region: config.aws.region,
    credentials: {
      accessKeyId: config.aws.accessKeyId,
      secretAccessKey: config.aws.secretAccessKey
    }
  });

  /**
   * Uploads a buffer to S3 under an optional folder prefix.
   * Returns the full object URL.
   */
  async uploadFile(
    buffer: Buffer,
    filename: string,
    mimetype: string,
    options?: {
      prefix?: string;       // e.g. "videos/{videoId}"
    }
  ): Promise<string> {
    const { prefix = '' } = options || {};


    // Build the S3 key: e.g. "videos/1234/original.mp4"
    const key = path.posix.join(prefix, filename);

    const command = new PutObjectCommand({
      Bucket: config.aws.bucketName,
      Key: key,
      Body: buffer,
      ContentType: mimetype
    });
    await this.s3.send(command);

    return `https://${config.aws.bucketName}.s3.${config.aws.region}.amazonaws.com/${key}`;
  }
}
