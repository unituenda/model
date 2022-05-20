import './database';
import flash from 'connect-flash';
import express, { urlencoded } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';

import session from './config/sessions';
import router from './app/routes';  

const app = express();

app.use(cookieParser());
app.use(session);
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'app', 'views'));
app.use(express.static(join(__dirname, 'app', 'views', 'public')));
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

app.listen(3333, () => {
  console.log('Port on http://localhost:3333/')
});