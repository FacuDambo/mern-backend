# Mern-backend
Node express backend project

# Dependencies
- ## _Express_
> Framework para hacer posible el backend con Node
```sh
npm i express
```
- ## _Dotenv_
> Para manejar variables de entorno usando archivos .env
```sh
npm i dotenv
```
- ## _Nodemon_
> Reinicia la aplicación al detectar cambios en ciertos archivos
```sh
npm i -D nodemon
```
- ## _Typescript_
> Utilizar typescript en nuestro projecto
```sh
npm i -D typescript @types/express @types/node
```
- ## _Concurrently_
> Correr varias lineas de comando concurrentemente (una seguida de la otra)
```sh
npm i -D concurrently
```
- ## _Webpack_
> Herramienta de compilación para empaquetar modulos, gestionar dependencias, ejecutar tareas, entre otras cosas
```sh
npm i -D webpack webpack-cli webpack-node-externals webpack-shell-plugin
```
- ## _Eslint_
> Trabajar con reglas predefinidas para tener codigo limpio
```sh
npm i -D eslint
```
- ## _Jest_
> testing unitario y de integracion
```sh
npm i -D jest ts-jest @types/jest supertest
```
- ## _Ts-node_
> Motor de ejecución de TypeScript para Node. 
```sh
npm i -D ts-node
```

# Scripts
```sh
"build": "npx tsc"
> Corre TSC para compilar código en ts a código en js a partir de lo especificado en tsconfig.json
```
```sh
"start": "node dist/index.js"
> Ejecuta el index.js que se encuentra en la carpeta dist
```
```sh
"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
> 'concurrently' va a ejecutar los comandos en orden
> 'npx tsc --watch' va a estar escuchando cualquier modificación en el código para transpilarla
> 'nodemon -q dist/index.js' ejecuta el proyecto ya transpilado
```
```sh
"serve:coverage": "npm run test && cd coverage/lcov-report && npx serve"
> 'npm run test' va a ejecutar el script test(en este caso es jest)
> 'cd coverage/lcov-report' va a movernos a la carpeta especificada
> 'npx serve' va a ejecutar serve para servir el coverage a nivel web
```

# Env
En el archivo .env se agregará 'PORT=8000' como primer variable de entorno

