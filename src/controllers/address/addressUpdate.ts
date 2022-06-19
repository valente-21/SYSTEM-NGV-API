import { Request, Response } from 'express'
import {addressUpdate} from '../../modules/address/addressUpdate'

export async function addressUpdateCtrl(req: Request, res: Response) {

    try {
        const address = await addressUpdate(Number(req.params.id), req.body)
        return res.status(200).json(address)

    } catch (error) {
        return res.status(400).json(String(error))
    }
    
}