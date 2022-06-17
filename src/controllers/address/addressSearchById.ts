import { Request, Response } from 'express'
import { addressSearchById } from '../../modules/address/addressSearchById'
export async function addressSearchByIdCtrl(req: Request, res: Response) {
    try {
        const { status, data } = await addressSearchById(Number(req.params.id))
        return res.status(status).json(data)
    } catch (error) {
        return res.status(400).json(error)
    }
}