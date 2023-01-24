import { Coordinates } from "@domain/entities/Coordinates";
import axios from 'axios'

export async function reverseGeocoding(coordinates: Coordinates): Promise<string>{
    const { latitude, longitude } = coordinates

    const url: string = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.GOOGLE_API_KEY}`
    const request = await axios.get(url)
    
    const address = request.data.results[0].formatted_address

    if(!address){
        throw new Error("Location not found")
    }

    return address
}