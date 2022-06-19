import { PrismaClient, Address } from '@prisma/client'

const prisma = new PrismaClient()

export type IAddress = Address
export type IAddressCreate = Omit<Address, 'id'>
export type IAddressUpdate = Omit<Partial<Address>, 'id'>

export const addressRepository = {
    create: async (addressData: IAddressCreate) => {
        return await prisma.address.create({
            data: addressData
        })
    },

    list: async () => {
        return  await prisma.address.findMany()
    },

    update: async (id: number, addressData: IAddressUpdate) => {

        console.log('address', addressData)
        
        const address =  await prisma.address.update({
            where: { id },
            data: addressData
        })
        
        return address
    }
}

