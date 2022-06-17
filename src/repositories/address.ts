import { PrismaClient, address } from '@prisma/client'

const prisma = new PrismaClient()

export const addressRepository = {
    create: async (addressData: address) => {
        return await prisma.address.create({
            data: addressData
        })
    }
}

export type IAddress = address