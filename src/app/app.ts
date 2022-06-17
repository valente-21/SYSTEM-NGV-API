import express from 'express'
import indexRoutes from '../routes'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', indexRoutes)

export default app