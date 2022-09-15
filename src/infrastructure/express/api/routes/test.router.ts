import { Router } from 'express'

const testRouter = Router()

testRouter.get('/', (_req, res) => {
  res.json({ message: 'Welcome application server' })
})

export default testRouter
