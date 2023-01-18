import express from 'express';
import {router} from './src/router/router';
import bodyParser from 'body-parser';
import fileUpload from "express-fileupload";
import session from "express-session";
import {AppDataSource} from "./src/data-source";

const app = express();

AppDataSource.initialize().then(()=>{
    console.log('Connect database success! SQL')
})
app.set('views','./src/views');

app.set('view engine', 'ejs');
app.use(fileUpload({
    createParentPath: true
}));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: { maxAge: 60000 }}));
app.use('',router)
app.listen(3000, () => {
    console.log('sever is running')
})