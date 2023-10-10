import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
require('dotenv').config();

const port : number | string = process.env.PORT?? 8000;

const app = express();

app.use(cors({
    credentials: true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());


const server = http.createServer(app);
server.listen(port,()=>{
    console.log('server running at port '+port);
})


module.exports.app = app;