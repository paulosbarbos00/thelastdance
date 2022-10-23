require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const { allowedNodeEnvironmentFlags } = require('process');

// Rotas da API
const indexRouter = require('./routes/index');
app.use('/', indexRouter);
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);



const PORT = process.env.PORT | 3000;

mongoose.connect(`mongodb+srv://psb2:Pweb00@api-pweb.fezxkns.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectamos ao MongoDB");
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Servidor escutando em http://localhost:${PORT}`)
        })
    })
    .catch((err) => console.log(err))
