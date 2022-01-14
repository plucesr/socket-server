import express from 'express';
import { SERVER_PORT } from '../global/enviroment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket  from '../sockets/sockets';



export default  class  Server { 
    private static _instance : Server;
    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;



    private constructor() {
        this.port = SERVER_PORT;
        this.app = express();

        this.httpServer = new http.Server(this.app);
        this.io = socketIO( this.httpServer )
        this.escucharSockets();

    }
    public static  get instance() {

        return this._instance || (this._instance = new this());
    }

    private escucharSockets() {
        console.log('Escuchando conexiones - sockets');
        this.io.on('connection', cliente => {
            console.log('Cliente conectado!!');

            //Mensajes

            socket.mensaje(cliente,this.io);

            socket.desconectar(cliente);

           
        });
    }

    start() {
        this.httpServer.listen(this.port, () => {console.log(`Servidor corriendo en el puerto ${this.port}`)});
    }

}