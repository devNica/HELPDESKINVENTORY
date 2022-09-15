import { Application, json, urlencoded } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'

export const setupGlobalMiddleware = (app: Application): void => {
  app.use(helmet())
  app.use(morgan('dev'))
  app.use(cors({ origin: '*' }))
  app.use(json())
  app.use(urlencoded({ extended: true }))
}
