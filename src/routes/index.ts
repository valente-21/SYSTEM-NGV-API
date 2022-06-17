import {Router} from 'express'
import addressRouter from './address'
import userRouter from './users'
const indexRoutes = Router()

indexRoutes.use('/users', userRouter )
indexRoutes.use('/address', addressRouter )

export default indexRoutes