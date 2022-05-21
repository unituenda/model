import Sequelize, { Model } from 'sequelize';


class News extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        content: Sequelize.STRING,
        photo_path: Sequelize.STRING,
        user_id: Sequelize.INTEGER,
        views: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'actor' });
  }
}

export default News;