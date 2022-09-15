import constants from '@common/constants/constants'
import { Router } from 'express'
import testRouter from './routes/test.router'

export interface ApiType {
  path: string
  controller: Router
}

export default function api (): ApiType[] {
  return [
    { path: `${constants.PREFIX}/test`, controller: testRouter }
  ]
}
