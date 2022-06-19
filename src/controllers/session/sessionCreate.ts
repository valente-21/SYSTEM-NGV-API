import { Request, Response } from 'express'
import { sessionCreate } from '../../modules/session/sessionCreate';

export async function sessionCreateCtrl(req: Request, res: Response) {
  try {
    const user = await sessionCreate(req.body);
    return res.status(200).send(user);

  } catch (error) {
    return res.status(400).json(String(error))
  }
}