import { PrismaClient, User } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()
export type IUser = User
export type IUserCreate = Omit<User, 'id'>
export type IUserUpdate = Omit<Partial<IUser>, 'id'> /// omite o id e torna todos os campos opcionais.

prisma.$use(async (params, next) => {
    if (params.model == 'User' && params.action == 'create') {
        // Logic only runs for delete action and Post model
        const quantity = Math.floor(Math.random());
        params.args.data.password = await bcrypt.hash(params.args.data.password, quantity);
    }
    return next(params)
})

export const userRepository = {

    create: async (userData: IUserCreate) => {
        return await prisma.user.create({
            data: userData
        })
    },

    list: async () => {
        return await prisma.user.findMany()
    },

    update: async (id: number, userData: IUserUpdate) => {
        return await prisma.user.update({
            where: { id },
            data: userData
        })
    },

    searchEmailOrNick: async (emailOrNick: string) => {
            return await prisma.user.findFirst({
                where: { OR:[
                    {email: emailOrNick},
                    {name: emailOrNick}
                ] }
            })
    },

    searchId: async (id: number) => {
        return await prisma.user.findUnique({
            where: { id }
        })
}
}

