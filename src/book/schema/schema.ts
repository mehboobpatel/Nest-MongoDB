import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type BookDocument = BookClass & Document

@Schema()
export class BookClass{
    @Prop()
    title: string;
    @Prop()
    author: string;
    @Prop()
    publish: number; 
}

export const BookSchema = SchemaFactory.createForClass(BookClass)