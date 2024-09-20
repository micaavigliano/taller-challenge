"use strict";
// src/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
const port = 8080;
app.use((0, cors_1.default)());
app.get('/api/transactions', (req, res) => {
    res.json(data_1.transactions);
});
app.use((req, res) => {
    res.status(404).send('Route not found');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
