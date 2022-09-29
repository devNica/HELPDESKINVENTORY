import { Sequelize } from 'sequelize'
import { UserAccountModel, GroupModel, UserGroupsModel } from '../models'

export default async function sequelizeLoader (sequelizeInstance: Sequelize, allowModelMigration: boolean): Promise<void> {
  // ASSOCIATIONS

  // GROUP MODEL
  GroupModel.belongsToMany(UserAccountModel, { through: 'user_groups', as: 'groupHaveUsers', foreignKey: 'fk_group' })

  // USERACCOUNT MODEL
  UserAccountModel.belongsToMany(GroupModel, { through: 'user_groups', as: 'userHaveGroups', foreignKey: 'fk_user' })
  UserAccountModel.hasMany(UserGroupsModel, { foreignKey: 'fk_user', onDelete: 'RESTRICT' })

  // USERGROUPS MODEL
  UserGroupsModel.belongsTo(UserAccountModel, { foreignKey: 'fk_user' })

  if (allowModelMigration) {
    await sequelizeInstance.sync({ alter: true })
      .then(_res => {
        console.log('all models have been created')
      })
      .catch(err => console.error(err))
  }
}
