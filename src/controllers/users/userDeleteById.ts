import {userDeleteById} from "../../modules/users/userDeleteById";
import { Request, Response } from "express";


export async function userDeleteByIdCtrl(req: Request, res: Response) {
    try {
        const { status, data } = await userDeleteById(Number(req.params.id))

        return res.status(status).json(data)

    } catch (error) {
        return res.status(400).json({ data: error })

    }
}