

// interface IAddress {
//     userId: number
//     country: string
//     state: string
//     city: string
//     road: string
//     number: string
//     Complement?: string
//     zipCode: string
// }

import { addressRepository, IAddress } from "../../repositories/address"

export async function addressCreate(addressData: IAddress) {
    const {
        userId,
        country,
        state,
        city,
        road,
        number,
        zipCode,

    } = addressData

    if (
        !userId ||
        !country ||
        !state ||
        !city ||
        !road ||
        !number ||
        !zipCode

    ) {
        throw new Error('Incomplete data')
    }
    const address = await addressRepository.create(addressData)
    return address
}
