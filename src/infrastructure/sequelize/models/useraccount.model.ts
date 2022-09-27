import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeInstance from '../connection'

export interface UserAccountEntity {
  id: number
  email: string
  password: string
  fullname: string
  phoneNumber: string
  resetPassword: boolean
  expiresIn: string
  isRoot: boolean
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface UserAccountAttrInput extends Optional<UserAccountEntity, 'id' | 'isActive' | 'resetPassword' | 'expiresIn' | 'updatedAt'> {}

export default class UserAccountModel extends Model<UserAccountEntity, UserAccountAttrInput> implements UserAccountEntity {
  public id!: number
  public email!: string
  public password!: string
  public fullname!: string
  public phoneNumber!: string
  public resetPassword!: boolean
  public expiresIn!: string
  public isRoot!: boolean
  public isActive!: boolean
  public createdAt!: string
  public updatedAt!: string
}

UserAccountModel.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fullname: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  resetPassword: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  expiresIn: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isRoot: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize: sequelizeInstance,
  modelName: 'user',
  underscored: true
})
