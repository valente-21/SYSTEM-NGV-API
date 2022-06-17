
interface IUser {
    name: string
    lastName: string
    password: string
    phone: string
    email: string
}

export default async function userCreate(user: IUser) {
    return { status: 200, data: user }
}