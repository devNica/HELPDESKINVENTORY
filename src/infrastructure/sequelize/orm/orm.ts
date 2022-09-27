import { Sequelize } from 'sequelize'

export default async function sequelizeLoader (sequelizeInstance: Sequelize, allowModelMigration: boolean): Promise<void> {
  if (allowModelMigration) {
    await sequelizeInstance.sync({ alter: true })
      .then(_res => {
        console.log('all models have been created')
      })
      .catch(err => console.error(err))
  }
}
