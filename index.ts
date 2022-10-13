import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// Config .env file
dotenv.config();

// Create express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define 1st route
app.get('/', (req: Request, res: Response) => {
    //Send something
    res.send('APP Express + TS + Nodemon + Jest + Swagger + Mongoose') //Body de la res
})

// Define hello route
app.get('/hello', (req: Request, res: Response) => {
    res.status(200).send({ 
        "data": {
            "message": `Hola ${req.query.name || 'anónimo'}`
        } 
    })
})


// Define goodbye
app.get('/goodbye', (req: Request, res: Response) => {
    //Send hello world
    res.status(200).send({ 
        "data": {
            "message": "Goodbye, world"
        } 
    })
})


// Execute APP and listen to request to PORT
// 1 - Puerto
// 2 - Lo que tiene que ejecutar
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})

