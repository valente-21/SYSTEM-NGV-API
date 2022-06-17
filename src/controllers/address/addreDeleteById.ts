import { Request, Response } from 'express'
import { addressDeleteById } from '../../modules/address/addressDeleteById'
export async function addressDeleteByIdCtrl(req: Request, res: Response) {
    try {
        const { status, data } = await addressDeleteById(Number(req.params.id))
        return res.status(status).json(data)
    } catch (error) {
        return res.status(400).json(error)
    }
}