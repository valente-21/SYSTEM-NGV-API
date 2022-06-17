import { Request, Response } from "express";
import userUpade from "../../modules/users/userUpdate";

export async function userUpdateCtrl(req: Request, res: Response) {
    try {
        const { status, data } = await userUpade()

        return res.status(status).json(data)

    } catch (error) {
        return res.status(400).json({ data: error })

    }
}