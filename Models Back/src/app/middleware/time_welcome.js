import { isBefore } from 'date-fns';

module.exports = (request, response, next) => {
  const hoursServer = new Date(`06/02/2022 15:20:10`);
  if(!isBefore(hoursServer, new Date())) {
    response.redirect('/welcome')
  } else {
     next();
  }
};
