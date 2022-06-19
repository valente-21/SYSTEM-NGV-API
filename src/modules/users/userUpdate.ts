import { userRepository,IUserUpdate} from '../../repositories/user'

export default async function userUpdate(id: number, data: IUserUpdate) {
    const update = await userRepository.update(id, data)
    return  update
}