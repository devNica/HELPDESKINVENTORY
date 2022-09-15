import { Application } from 'express'
import { ApiType } from '../api'

export const setupRoutes = (app: Application, routes: ApiType[]): void => {
  routes.forEach(route => {
    app.use(route.path, route.controller)
  })
}
