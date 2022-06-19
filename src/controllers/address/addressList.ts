import { Request, Response } from 'express'
import { addressList } from '../../modules/address/addressList'

export async function addressListCtrl(req: Request, res: Response) {
    try {
        const address = await addressList()
        return res.status(200).json(address)
    } catch (error) {
        return res.status(400).json({ error: 'Internal server error' })
    }
}