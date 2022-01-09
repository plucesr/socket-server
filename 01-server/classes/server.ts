import express from 'express';
import { SERVER_PORT } from '../global/enviroment';

export default  class  Server {

    public app: express.Application;
    public port: number;


    constructor() {
        this.port = SERVER_PORT;
        this.app = express();
    }

    start() {
        this.app.listen(this.port, () => {console.log(`Servidor corriendo en el puerto ${this.port}`)});
    }

}