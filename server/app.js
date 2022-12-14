import express from 'express';
import path from 'node:path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import feedRouter from './routes/feed.js';
import usersRouter from './routes/users.js';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', indexRouter);
app.use('/feed', feedRouter);
app.use('/users', usersRouter);

export default app;
