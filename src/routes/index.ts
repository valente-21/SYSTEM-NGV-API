import {Router} from 'express'
import addressRouter from './address'
import userRouter from './users'
import sessionRoutes from './session'

const indexRoutes = Router()

indexRoutes.use('/users', userRouter )
indexRoutes.use('/address', addressRouter )
indexRoutes.use('/session', sessionRoutes)

export default indexRoutes 