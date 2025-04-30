"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pino_http_1 = __importDefault(require("pino-http"));
const swagger_1 = require("./swagger");
const routes_1 = __importDefault(require("./routes"));
const prepareResponse_1 = require("./utils/prepareResponse");
const error_1 = require("./utils/error");
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // enable CORS
app.use((0, pino_http_1.default)()); // enable Logger
app.use(express_1.default.json()); // JSON parsing
(0, swagger_1.setupSwagger)(app); // Swagger docs at /api-docs
app.get("/health", (_, res) => {
    res.status(200).send("Yupp!, Server is runnning\n\n");
});
app.use("/api", routes_1.default);
// ─── Error‐Handling Middleware ────────────────────────────────────────────────
app.use((error, _req, res) => {
    // 1) Your KnownError
    if (error instanceof error_1.KnownError) {
        res
            .status(error.code)
            .json((0, prepareResponse_1.prepareResponse)({ status: 'error', details: error.details || error.message }));
        return;
    }
    // 2) Fallback for anything else
    res
        .status(500)
        .json((0, prepareResponse_1.prepareResponse)({ status: 'error', details: 'InternalServerError' }));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
