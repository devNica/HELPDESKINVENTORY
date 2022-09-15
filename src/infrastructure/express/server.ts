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

export const app = express()

setupApp(app)
setupGlobalMiddleware(app)
setupRoutes(app, api())

app.listen(constants.SERVER_PORT, () => {
  console.log(`server is running on port: ${constants.SERVER_PORT}`)
})
