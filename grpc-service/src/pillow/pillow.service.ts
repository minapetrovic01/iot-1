import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pillow } from './pillow.model';

@Injectable()
export class PillowService {

    constructor(@InjectModel('Pillow') private readonly pillowModel: Model<Pillow>) {}

    async create(data: any): Promise<Pillow> {
        const createdPillow = new this.pillowModel(data);
        return await createdPillow.save();
    }

    async findAll(): Promise<Pillow[]> {
        return await this.pillowModel.find().exec();
    }

    async findOne(id: string): Promise<Pillow> {
        return await this.pillowModel.findById(id).exec();
    }

    async findByStressRate(stressRate: number): Promise<Pillow[]> {
        return await this.pillowModel.find({ stresState: stressRate }).exec();
    }

    async update(id: string, data: any): Promise<Pillow> {
        return await this.pillowModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<any> {
        return await this.pillowModel.findByIdAndDelete(id);
    }

    async clearDatabase(): Promise<void> {
        await this.pillowModel.deleteMany({}).exec();
    }
}
