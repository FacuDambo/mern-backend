import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// Config .env file
dotenv.config();

// Create express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define 1st route
// 1 - Ruta
// 2 - request y response
app.get('/', (req: Request, res: Response) => {
    //Send something
    res.send('APP Express + TS + Nodemon + Jest + Swagger + Mongoose') //Body de la res
})

// Define new route
app.get('/hello', (req: Request, res: Response) => {
    //Send hello world
    res.send('HELLO WORLD')
})



// Execute APP and listen to request to PORT
// 1 - Puerto
// 2 - Lo que tiene que ejecutar
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})

