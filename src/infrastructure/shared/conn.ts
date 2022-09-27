import { Dialect } from 'sequelize/types'

interface DBOptions {
  dialect: Dialect
  host: string
  dialectOptions: {
    multipleStatements: boolean
  }
  logging: boolean
  timezone: string
  define: {
    freezeTableName: boolean
    timestamps: boolean
    underscored: boolean
  }
}

export default interface conn {
  user: string
  password: string
  database: string
  options: DBOptions
}
