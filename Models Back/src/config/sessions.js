import expressSession from 'express-session';
const SessionStore = require('express-session-sequelize')(expressSession.Store);

import Sequelize from 'sequelize';

const myDatabase = new Sequelize('hajdamodel', 'postgres', 'docker', {
	host: 'localhost',
	dialect: 'postgres',
});

const sequelizeSessionStore = new SessionStore({
	db: myDatabase,
});

export default expressSession({
  secret: 'keep it secret, keep it safe.',
	store: sequelizeSessionStore,
	resave: false,
	saveUninitialized: false,
});