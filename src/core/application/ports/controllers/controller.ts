import { RequestModel } from '../http/http-request'
import { ResponseModel } from '../http/http-response'

export interface Controller<T = unknown> {
  handleRequets: (reqquestModel: RequestModel) => Promise<ResponseModel<T>>
}
