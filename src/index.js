import express from 'express';
const app = express();
const port = 3000;
import {router } from './routes/random-generator.js'


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/', router);

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});