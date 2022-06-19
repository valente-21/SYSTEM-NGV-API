
import {sessionCreateCtrl} from '../controllers/session/sessionCreate'

import { Router } from 'express'

const sessionRouter = Router()

sessionRouter.post('/create', sessionCreateCtrl)

export default sessionRouter