import {addressRepository, IAddressUpdate} from '../../repositories/address'

export async function addressUpdate(id: number, updateData: IAddressUpdate){
    const update = await addressRepository.update(id, updateData)
    return update
}