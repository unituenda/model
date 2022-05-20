import express, { urlencoded } from 'express';
import { join } from 'path';
import router from './APP/routes/router.public';  

const app = express();

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'APP', 'views'));
app.use(urlencoded({ extended: false }));
app.use(router);

app.use((err, request,  response, _) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 500,
    message: 'Interno Error ',
  });
});

app.listen(3333, () => {
  console.log('Port on http://localhost:3333/')
});