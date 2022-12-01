export interface Item {
    tags: string[]
    price: number
    name: string
    description: string
    slug: string
    added: number
    manufacturer: string
    itemType: string
}

export interface Company {
    slug: string
    name: string
    address: string
    city: string
    state: string
    zip: string
    account: number
    contact: string
}
