import {userRepository, IUser} from '../../repositories/user'

export default async function userCreate(userData: IUser) {
    const {
        name,
        lastName,
        password,
        email,
        phone

    } = userData

    if (
        !name ||
        !lastName ||
        !password ||
        !email ||
        !phone
    ) {
        throw new Error('Incomplete data')
    }

    const resultValidatePassword = validatePassword(password)

    if (!resultValidatePassword) throw new Error('Invalid password')
    const user = await userRepository.create({
        name,
        lastName,
        password,
        email,
        phone

    }) // a desestruturação do userData garante que somente os dados esperados sejam enviados ao banco.
    return  user
}


function validatePassword(psw: string) {
    const regexI = /[a-z]\d/.test(psw)
    const regexII = psw.includes(' ')
    return regexI && !regexII ? true : false
}