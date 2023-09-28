import { IsNotEmpty } from 'class-validator';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Car {
    @Prop({ required: true })
    manufacturer: string;

    @Prop()
    year: string;

    @Prop()
    color: string;

    @Prop()
    type: string;
}

export const CarSchema = SchemaFactory.createForClass(Car)