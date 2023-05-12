import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../../config/database';

export class UserModel extends Model {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

UserModel.init(
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'user',
  }
);

