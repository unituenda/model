import express, { urlencoded } from 'express';
import { join } from 'path';
import router from './APP/routes/router.public';  

const app = express();

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'APP', 'views'));
app.use(urlencoded({ extended: false }));
app.use(router);

app.listen(3333, () => {
  console.log('Port on http://localhost:3333/')
});