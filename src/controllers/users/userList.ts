import { Request, Response } from "express";
import userList from "../../modules/users/userList";

export async function userListCtrl(req: Request, res: Response) {
    try {
        const users = await userList()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({ error: 'Internal server error' })
    }
}