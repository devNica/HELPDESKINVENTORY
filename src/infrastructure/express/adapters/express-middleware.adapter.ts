import { HttpResponse } from '@core/application/ports/http/http-response'
import { Middleware } from '@core/application/ports/middlewares/middleware'
import { NextFunction, Request, Response } from 'express'
import { ApiResponse } from './api-response-adapter'

export const expressMiddlewareAdapter = (middleware: Middleware) => {
  return async (request: Request, _response: Response, next: NextFunction) => {
    return await Promise.resolve(
      middleware.handleRequest({
        query: request.query,
        params: request.params,
        body: request.body,
        headers: request.headers,
        method: request.method
      })
    ).then(() => {
      next()
    }).catch(error => {
      const r = error.message.split(',')
      const type: HttpResponse = r[0]
      next(ApiResponse[`${type}`](r[1], {}))
    })
  }
}
