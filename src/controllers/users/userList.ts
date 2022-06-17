import { Request, Response } from "express";
import userList from "../../modules/users/userList";

export async function userListCtrl(req: Request, res: Response) {
    try {
        const { status, data } = await userList()

        return res.status(status).json(data)

    } catch (error) {
        return res.status(400).json({ data: error })

    }
}