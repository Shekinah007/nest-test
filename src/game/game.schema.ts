import { IsNotEmpty } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class GameDto {
    @Prop({ required: true })
    @IsNotEmpty()
    name: string;

    @Prop()
    @IsNotEmpty()
    releaseYear: string;

    @Prop()
    gameDeveloper: string;

}

export const gameSchema = SchemaFactory.createForClass(GameDto)

