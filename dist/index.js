"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Config .env file
dotenv_1.default.config();
// Create express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define 1st route
// 1 - Ruta
// 2 - request y response
app.get('/', (req, res) => {
    //Send something
    res.send('APP Express + TS + Nodemon + Jest + Swagger + Mongoose'); //Body de la res
});
// Define new route
app.get('/hello', (req, res) => {
    //Send hello world
    res.send('HELLO WORLD');
});
// Execute APP and listen to request to PORT
// 1 - Puerto
// 2 - Lo que tiene que ejecutar
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map