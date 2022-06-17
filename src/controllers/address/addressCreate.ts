import { Request, Response } from 'express'
import { addressCreate } from '../../modules/address/addressCreate'

export async function addressCreateCtrl(req: Request, res: Response) {
    try {
        const address = await addressCreate(req.body)
        return res.status(200).json(address)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message })
        }
        console.log(error)
        return res.status(400).json({ error: 'Internal server error' })

    }
}