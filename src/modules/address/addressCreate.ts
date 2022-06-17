interface IAddress {
    userId: number
    Country: string
    state: string
    City: string
    Road: string
    Number: string
    Complement?: string
    ZipCcode: string
}

export async function addressCreate(address: IAddress) {
    return { status: 200, data: address }
}
