import 'dotenv/config'
import express from 'express'
import indexRoutes from './routes'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', indexRoutes)
const PORT = process.env.PORT || 3333

app.listen(PORT, ()=> console.log('servidor rodando na porta ====> ' + PORT))