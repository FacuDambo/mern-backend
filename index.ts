import dotenv from 'dotenv'
import server from './src/server'
import { LogError, LogSuccess } from './src/utils/logger';

//Variables de entorno
dotenv.config();

const port = process.env.PORT || 8000;

//Ejecutar server
server.listen(port, () => {
    LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`);
})

//Controlar errores de servidor
server.on('error', (err) => {
    LogError(`[SERVER ERROR]: ${err}`)
})
