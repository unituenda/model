import Sequelize, { Model } from 'sequelize';


class Mods extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        sexy: Sequelize.STRING,
        height: Sequelize.STRING,
        chest: Sequelize.STRING,
        waist: Sequelize.STRING,
        hip: Sequelize.STRING,
        shoe: Sequelize.STRING,
        eyes: Sequelize.STRING,
        hair: Sequelize.STRING,
        skin: Sequelize.STRING,
        experience: Sequelize.STRING,
        photo: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Mods;