import express, { Request, Response, ErrorRequestHandler } from 'express';
import cors from 'cors';
import pinoHTTP from "pino-http"
import { setupSwagger } from './swagger';
import routes from './routes';
import multer from 'multer';
import { prepareResponse } from './utils/prepareResponse';
import { KnownError } from './utils/error';

const app = express();

app.use(cors());                       // enable CORS
app.use(pinoHTTP());                   // enable Logger
app.use(express.json());               // JSON parsing
setupSwagger(app);                     // Swagger docs at /api-docs



app.get("/health", (_, res: Response) => {
  res.status(200).send("Yupp!, Server is runnning\n\n")
})

app.use("/api", routes)

// ─── Error‐Handling Middleware ────────────────────────────────────────────────
app.use((error: Error, _req: Request, res: Response) => {
  // 1) Your KnownError
  if (error instanceof KnownError) {
    res
      .status(error.code)
      .json(prepareResponse({ status: 'error', details: error.message }));
    return
  }

  // 2) Fallback for anything else
  res
    .status(500)
    .json(prepareResponse({ status: 'error', details: 'InternalServerError' }));
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`),
);
