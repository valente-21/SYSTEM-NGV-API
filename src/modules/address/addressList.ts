import {addressRepository} from '../../repositories/address'
export async function addressList(){
    const addressList = await addressRepository.list()
    return addressList
}