import {PrismaClient, user} from '@prisma/client'

const prisma = new PrismaClient()

export const userRepository = {

     create: async (userData: user) => {
       return await prisma.user.create({
            data: userData
        })
    }
}

export type IUser = user