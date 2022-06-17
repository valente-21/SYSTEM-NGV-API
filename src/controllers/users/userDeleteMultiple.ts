import userDeleteMultiple from "../../modules/users/userDeleteMultiple";
import { Request, Response } from "express";
export async function userDeleteMultipleCtrl(req: Request, res: Response) {
    try {
        const ids: number[] = JSON.parse(req.params.ids)
        const { status, data } = await userDeleteMultiple(ids)

        return res.status(status).json(data)

    } catch (error) {
        return res.status(400).json({ data: error })

    }
}