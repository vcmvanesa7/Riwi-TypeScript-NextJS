type Address =  {
    street : string,
    apartament? : string,
    postalCode : string,
    city: string,
    country: string,
}


export interface FormData {
    name: string,
    SurName : string,
    age: number,
    contactNumber: number,
    email: string,
    address: Address,
}