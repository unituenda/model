module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'hajdamodel',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAllL: true,
  },
};