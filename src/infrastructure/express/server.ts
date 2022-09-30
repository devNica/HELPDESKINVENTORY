/* eslint-disable @typescript-eslint/restrict-template-expressions */
import 'reflect-metadata'
import 'source-map-support/register'
import 'module-alias/register'
import { setupApp } from './setup/setup-app'
import { setupGlobalMiddleware } from './setup/setup-global-middlewares'
import { setupRoutes } from './setup/setup-routes'

import express from 'express'
import api from './api'
import constants from '@common/constants/constants'

import sequelizeInstance from '@infrastructure/sequelize/connection'
import sequelizeLoader from '@infrastructure/sequelize/orm/orm'

import { eventLogger } from '@common/logger/event-logger'

export const app = express()

setupApp(app)
setupGlobalMiddleware(app)
setupRoutes(app, api())

sequelizeLoader(sequelizeInstance, false)
  .then(_ => console.log('connection database success'))
  .catch(err => console.log('connection database failed: ', err))

app.listen(constants.SERVER_PORT, () => {
  eventLogger.getLoggerInfo(`🚀 Server is running on port: ${constants.SERVER_PORT}`)
})
