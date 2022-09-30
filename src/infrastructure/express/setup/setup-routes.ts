import { Application } from 'express'
import { ApiResponse } from '../adapters/api-response.adapter'
import { ApiType } from '../api'

export const setupRoutes = (app: Application, routes: ApiType[]): void => {
  routes.forEach(route => {
    app.use(route.path, route.controller)
  })

  app.use((_req, _res, next) => {
    const error = new Error('Internal server error')
    next(ApiResponse.internalServerErrorRequets(error.message, {}))
  })
}
