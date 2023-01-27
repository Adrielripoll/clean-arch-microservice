import { IsNumber } from 'class-validator'

export class CreateLocationDto {
    @IsNumber()
    freightMatchId: number

    @IsNumber()
    latitude: number

    @IsNumber()
    longitude: number
}