import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

dotenv.config()

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.send('pong!')
})

export default app
