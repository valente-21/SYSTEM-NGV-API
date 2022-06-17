import { Request, Response } from 'express'
import { addressList } from '../../modules/address/addressList'

export async function addressListCtrl(req: Request, res: Response) {
    try {
        const {status, data} = await addressList()
        return res.status(status).json(data)
    } catch (error) {
        return res.status(400).json(error)
    }
}