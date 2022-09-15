import { Application } from 'express'

export const setupApp = (app: Application): void => {
  app.set('trust proxy', 1)
  app.disable('x-powered-by')
}
