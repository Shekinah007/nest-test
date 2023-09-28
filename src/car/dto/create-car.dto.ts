import { IsNotEmpty } from 'class-validator';
export class CreateCarDto {
    @IsNotEmpty()
    manufacturer: string;
    year: string;
    color: string;
    type: string;
}
