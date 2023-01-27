import { Coordinates } from "@application/entities/Coordinates";
import axios from 'axios'

export async function reverseGeocoding(coordinates: Coordinates): Promise<string>{
    const { latitude, longitude } = coordinates

    const url: string = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2`
    const { data } = await axios.get(url)
    
    if(!data){
        throw new Error("Location not found")
    }

    const { address } = data

    const addressInfo = [ address.road, address.suburb, address.city, address.state, address.country, address.postcode ]

    const formatedAddress = addressInfo.join(', ')

    return formatedAddress
}