import {userRepository} from '../../repositories/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
interface ISessionData {
    login: string 
    password: string
}
export async function sessionCreate(sessionData: ISessionData)  {

    const user = await userRepository.searchEmailOrNick(sessionData.login)

    if (!user) throw new Error('Usuário ou senha inválido')
    
    if (!await bcrypt.compare( sessionData.password, user.password)) throw new Error('Usuário ou senha inválido')

    const token = generateToken({id: user.id, name:user.name})
    
    return {name: user.name, token}
}

function generateToken(params = {}) {
    if(!process.env.SECRET) throw new Error('env não configurado')
    const token = jwt.sign(params, process.env.SECRET, { expiresIn: 86400 });
    return token;
  }