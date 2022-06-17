import userCreate from "../../modules/users/userCreate";
import { Request, Response } from "express";

export async function userCreateCtrl(req: Request, res: Response) {
    try {
        const {
            name,
            lastName,
            password,
            email,
            phone

        } = req.body

        if (
            !name ||
            !lastName ||
            !password ||
            !email ||
            !phone
        ) {
            return res.status(400).json({ data: { message: 'Incomplete data' } })
        }

        const resulValidatePassword = validatePassword(password)
        if (!resulValidatePassword) return res.status(400).json({ data: { message: 'Invalid password' } })

        const { status, data } = await userCreate(req.body)

        return res.status(status).json(data)

    } catch (error) {
        return res.status(400).json({ data: error })

    }
}

function validatePassword(psw: string) {
    const regexI = /[a-z]\d/.test(psw)
    const regexII =psw.includes(' ')
    return regexI && !regexII? true:false
}