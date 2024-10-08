import * as dotenv from 'dotenv'
dotenv.config()

import express, { Application, Request, Response } from 'express'
import routes from './routes/index'

const createServer = (): express.Application => {
  const app: Application = express()

  // Body parsing Middleware
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  console.log("Enter")

  app.use(routes)

  // eslint-disable-next-line no-unused-vars

  app.get('/', async (_req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
      success: true,
      message: 'The server is running',
    })
  })

  return app
}

export default createServer
