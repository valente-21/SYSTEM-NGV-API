import userCreate from "../../modules/users/userCreate";
import { Request, Response } from "express";

export async function userCreateCtrl(req: Request, res: Response) {
    try {
        const user = await userCreate(req.body)
        return res.status(200).json(user)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message })
        }
        return res.status(400).json({ error: 'Internal server error' })
    }
}

