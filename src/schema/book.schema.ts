import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class Book {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    author: string;

    @Prop({ defaultValue: 1 })
    pages: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

// export const BookSchema2 = new mongoose.Schema({
//     title: String,
//     author: String,
//     pages: Number
// })
