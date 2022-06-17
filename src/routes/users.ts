import { Router } from 'express'
import { userUpdateCtrl } from '../controllers/users/userUpdate';
import { userCreateCtrl } from '../controllers/users/userCreate';
import { userDeleteMultipleCtrl } from '../controllers/users/userDeleteMultiple';
import { userDeleteByIdCtrl } from '../controllers/users/userDeleteById';
import { userSerachByIdCtrl } from '../controllers/users/userSearchById';
import { userListCtrl } from '../controllers/users/userList';
const userRouter = Router()

userRouter.post('/create', userCreateCtrl)
userRouter.get('/list', userListCtrl)
userRouter.get('/search/:id', userSerachByIdCtrl)
userRouter.put('/update/:id', userUpdateCtrl)
userRouter.delete('/delete/', userDeleteMultipleCtrl)
userRouter.delete('/delete/:id', userDeleteByIdCtrl)
export default userRouter