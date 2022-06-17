import { Request, Response } from "express";

import userSearchById from "../../modules/users/userSearchById";

export async function userSerachByIdCtrl(req: Request, res: Response) {
    try {
        const { status, data } = await userSearchById()

        return res.status(status).json(data)

    } catch (error) {
        return res.status(400).json({ data: error })

    }
}
