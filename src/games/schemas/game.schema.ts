/* eslint-disable prettier/prettier */
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GamesDocument = Games & Document;

export class Games {
  @Prop()
  type: string;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  image: string;

  @Prop()
  imageShow: { image: string }[];

  @Prop()
  mode: string;
}

export const GamesSchema = SchemaFactory.createForClass(Games);
