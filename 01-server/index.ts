
import Server from "./classes/server";
import  router  from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';



const server = Server.instance;

//BodyParser

server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());


// Cors Para la version de socket.io 4 o superior se debe especificar el dominio, los headers y el metodo.

server.app.use(cors({
    origin: "http://localhost:4200", credentials: true,
    allowedHeaders: ["my-custom-header"],
    methods: ["GET", "POST"]

   
    
}));


//Rutas de servicios

server.app.use('/', router);

server.start();