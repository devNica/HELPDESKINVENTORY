import { ResponseModel, HttpResponse } from '../http/http-response'

export interface ErrorParams{
  type: string
  message: string
}

export type ErrorHandlerModel = Omit<ResponseModel<ErrorParams>, 'body'>

export class GenericErrorHandler extends Error implements ErrorHandlerModel {
  public type: HttpResponse
  public message: string

  constructor (message: string, type: HttpResponse) {
    super(message)
    this.message = `${type},${message}`
    this.type = type
  }
}
