import { Request, Response } from "express";
import userUpdate from "../../modules/users/userUpdate";

export async function userUpdateCtrl(req: Request, res: Response) {
    try {
        const user = await userUpdate(Number(req.params.id), req.body)

        return res.status(200).json(user)

    } catch (error) {
        return res.status(400).json({ data: error })//

    }
}