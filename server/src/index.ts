import express from 'express';
import cors from 'cors';
import router from './router/index.js';

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(router);

const start = async () => {
    try {
        app.listen(5000, () => console.log('server start'));
    } catch (err) {
        console.log(err);
    }
}

start();
