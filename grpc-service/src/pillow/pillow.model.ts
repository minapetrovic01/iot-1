// pillow.model.ts

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pillow extends Document {
    @Prop()
    snoringRange: number;

    @Prop()
    respirationRate: number;

    @Prop()
    bodyTemperature: number;

    @Prop()
    limbMovement: number;

    @Prop()
    bloodOxygen: number;

    @Prop()
    rem: number;

    @Prop()
    hoursSleeping: number;

    @Prop()
    heartRate: number;

    @Prop()
    stresState: number;
}

export const PillowSchema = SchemaFactory.createForClass(Pillow);
