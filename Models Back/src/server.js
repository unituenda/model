import './database';
import flash from 'connect-flash';

import express, { response, urlencoded } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';

import session from './config/sessions';
import router from './app/routes';  

const app = express();

app.use(cookieParser());
app.use(session);
app.set('view engine', 'ejs');
app.set('views', join(__dirname, '..', 'views'));
app.use(express.static(join(__dirname, '..', 'views', 'public')));
app.use(express.static(join(__dirname, '..', 'tmp')));
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session);
app.use(flash());
app.use(router);

// app.use((err, request,  response, _) => {
//   if (err instanceof AppError) {
//     return response.status(err.statusCode).json({
//       status: err.statusCode,
//       message: err.message,
//     });
//   }

//   return response.status(500).json({
//     status: 500,
//     message: 'Interno Error ',
//   });
// });

app.use((request, response) => {
  response.render('Error/404.ejs');
});

app.listen(3333, () => {
  console.log('Port on http://localhost:3333/')
});
