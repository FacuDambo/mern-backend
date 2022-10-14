/**
 * Root Router
 * Encargado de redireccionar las direcciones
 * Aca llegan todas las peticiones de /api y redirecciona a donde debe
 */

import express, {Request, Response} from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';

// Instanciar el server
let server = express();

//Instancia de ruter
let rootRouter = express.Router();

// Activar request a htpp://localhost:8000/api
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: //htpp://localhost:8000/api')
    res.send('APP Express + TS + Nodemon + Jest + Swagger + Mongoose') //Body de la res
})

// Redirecciones a routers y controladores
server.use('/', rootRouter); //htpp://localhost:8000/api
server.use('/hello', helloRouter); //htpp://localhost:8000/api/hello  --> gestionado por HelloRouter



export default server