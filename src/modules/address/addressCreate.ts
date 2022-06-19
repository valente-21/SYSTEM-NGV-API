
import { addressRepository, IAddress } from "../../repositories/address"

export async function addressCreate(addressData: IAddress) {
    const {
        userId,
        country,
        state,
        city,
        district,
        road,
        number,
        zipCode,
        complement

    } = addressData

    if (
        !userId ||
        !country ||
        !state ||
        !city ||
        !district||
        !road ||
        !number ||
        !zipCode

    ) {
        throw new Error('Incomplete data')
    }
    const address = await addressRepository.create({
            userId,
            country,
            state,
            city,
            district,
            road,
            number,
            complement,
            zipCode,
    })
    return address
}
