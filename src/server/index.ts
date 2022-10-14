import express, { Express, Request, Response } from "express";
//Seguridad
import cors from 'cors'
import helmet from "helmet";
// TODO: HTTPS
// Root Router
import rootRouter from '../routes'; //por defecto es el index

// Create express APP
const server: Express = express();

//Definir SERVER a "/api" y ejecute el rootRouter de 'index.ts' en routes
//A partir de aca lo que usamos es: http://localhost:8000/api/...
server.use('/api', rootRouter)

// TODO: Mongoose Connection

// Configuracion de seguridad
server.use(helmet());
server.use(cors());

// Configuracion de tipo de contenido
server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({limit: '50mb'}));

// Quiero que ocurra esta redireccion cuando no pongo /api
// http://localhost:8000/ --> http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api')
}) 

export default server
