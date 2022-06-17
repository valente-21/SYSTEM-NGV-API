import { Router } from 'express'
import { addressDeleteByIdCtrl } from '../controllers/address/addreDeleteById'
import { addressCreateCtrl } from '../controllers/address/addressCreate'
import { addressDeleteMultipleCtrl } from '../controllers/address/addressDeleteMultiple'
import { addressSearchByIdCtrl } from '../controllers/address/addressSearchById'
import { addressUpdateCtrl } from '../controllers/address/addressUpdate'

const addressRouter = Router()

addressRouter.post('/create', addressCreateCtrl)
addressRouter.get('/list', addressCreateCtrl) //
addressRouter.get('/search/:id', addressSearchByIdCtrl)
addressRouter.put('/update/:id', addressUpdateCtrl)
addressRouter.delete('/delete/', addressDeleteMultipleCtrl)
addressRouter.delete('/delete/:id', addressDeleteByIdCtrl)

export default addressRouter