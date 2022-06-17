import { Request, Response } from 'express'
import { addressCreate } from '../../modules/address/addressCreate'

export async function addressCreateCtrl(req: Request, res: Response) {
    try {
        const {
            userId,
            country,
            state,
            cit,
            road,
            number,
            zipCcod,

        } = req.body

        if (
            !userId ||
            !country ||
            !state ||
            !cit ||
            !road ||
            !number||
            !zipCcod

        ) {
            return res.status(400).json({ data: { message: 'Incomplete data' } })
        }

        const { status, data } = await addressCreate(req.body)
        return res.status(status).json(data)

    } catch (error) {
        return res.status(400).json(error)

    }
}