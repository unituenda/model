import Sequelize, { Model } from 'sequelize';


class News extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        content: Sequelize.TEXT,
        photo_path: Sequelize.STRING,
        views: Sequelize.INTEGER,
        category: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

export default News;