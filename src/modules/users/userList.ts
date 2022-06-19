import {userRepository} from '../../repositories/user'

export default async function userList (){
    const userLIst = await userRepository.list()
    return userLIst
}