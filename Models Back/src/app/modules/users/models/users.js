import Sequelize, { Model } from 'sequelize';

import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        nevilSession: Sequelize.INTEGER,
        password_hash: Sequelize.VIRTUAL,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async user => {
      if (user.password_hash) {
        user.password = await bcrypt.hash(user.password_hash, 8);
      }
    });

    return this;
  }

  checkPassword(password_hash) {
    return bcrypt.compare(password_hash, this.password);
  }
}

export default User;
