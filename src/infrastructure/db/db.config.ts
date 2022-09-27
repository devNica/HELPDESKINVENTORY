import { Dialect } from 'sequelize'
import constants from '../shared/constants'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function connectionDB () {
  return {
    user: constants.DB.DBUSER,
    password: constants.DB.DBPASSWORD,
    database: constants.DB.DBNAME,
    port: constants.DB.DBPORT,
    options: {
      dialect: constants.DB.DIALECT as Dialect,
      host: constants.DB.DBHOST,
      dialectOptions: {
        multipleStatements: true
      },
      logging: false,
      timezone: '-06:00',
      define: {
        freezeTableName: true,
        timestamps: false,
        underscored: true
      }
    }
  }
}

export default connectionDB
