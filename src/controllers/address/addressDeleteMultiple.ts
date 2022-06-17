import { Request, Response } from 'express'
import { addressDeleteMultiple } from '../../modules/address/addressDeleteMultiple'

export async function addressDeleteMultipleCtrl(req: Request, res: Response) {
    try {
        const ids: number[] = JSON.parse(req.params.ids)
        const { status, data } = await addressDeleteMultiple(ids)
        return res.status(status).json(data)
    } catch (error) {
        return res.status(400).json(error)
    }
}