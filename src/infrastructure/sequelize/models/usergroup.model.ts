import { DataTypes, Model } from 'sequelize'
import sequelizeInstance from '../connection'

export interface UserGroupsEntity{
  fkGroup: number
  fkUser: number
}

export interface UserAttrInput extends Required<UserGroupsEntity> {}
export interface UserAttrOutput extends Required<UserGroupsEntity> {}

export default class UserGroupsModel extends Model<UserGroupsEntity, UserAttrInput> implements UserGroupsEntity {
  public fkGroup!: number
  public fkUser!: number
}

UserGroupsModel.init({
  fkGroup: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'group',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  },
  fkUser: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user_account',
      key: 'id'
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  }
}, {
  sequelize: sequelizeInstance,
  modelName: 'user_groups',
  underscored: true
})
