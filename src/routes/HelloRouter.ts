//Instancia de los controllers
import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";


// Router de express
let helloRouter = express.Router();

// GET => http://localhost:8000/api/hello?name=X/ << Recibe un parametro por ruta
helloRouter.route('/').get(async (req: Request, res: Response) => {
    //Obtener el queryparam
    let name: any = req?.query?.name //> ? en caso de que exista 
    LogInfo(`QueryParam: ${name}`);

    //Instancia de controller para ejecutar metodo
    const controller: HelloController = new HelloController();
    //Obtener respuesta consumiendo la promesa
    const response = await controller.getMessage(name);
    //Enviar al cliente la respuesta
    return res.send(response);
})

export default helloRouter