import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pillow } from './pillow.model';
import { DataDto } from 'src/protos/pillow/DataDto';
import { Data } from 'src/protos/pillow/Data';
import { Datas } from 'src/protos/pillow/Datas';
import { AvgStressLevel } from 'src/protos/pillow/AvgStressLevel';
import { ParamsToFind } from 'src/protos/pillow/ParamsToFind';
import { DataID } from 'src/protos/pillow/DataID';
import { ResponseCode } from 'src/protos/pillow/ResponseCode';
import { ParamToFind } from 'src/protos/pillow/ParamToFind';
import { AvgHeartRate } from 'src/protos/pillow/AvgHeartRate';

@Injectable()
export class PillowService {


    constructor(@InjectModel('Pillow') private readonly pillowModel: Model<Pillow>) { }

    async create(data: DataDto): Promise<Data> {
        try {
            const createdPillow = new this.pillowModel(data);
            let pillow = await createdPillow.save();
            let dataToReturn: Data = {
                _id: pillow._id.toString(),
                snoringRange: pillow.snoringRange.toString(),
                respirationRate: pillow.respirationRate.toString(),
                bodyTemperature: pillow.bodyTemperature.toString(),
                limbMovement: pillow.limbMovement.toString(),
                bloodOxygen: pillow.bloodOxygen.toString(),
                rem: pillow.rem.toString(),
                hoursSleeping: pillow.hoursSleeping.toString(),
                heartRate: pillow.heartRate.toString(),
                stresState: pillow.stresState
            };
            return Promise.resolve(dataToReturn);
        }
        catch (error) {
            throw error;
        }

    }

    async findAll(): Promise<Datas> {
        let result: Data[] = [];
        try {
            let dbResult = await this.pillowModel.find().exec();
            dbResult.forEach((element) => {
                let data: Data = {
                    _id: element._id.toString(),
                    snoringRange: element.snoringRange.toString(),
                    respirationRate: element.respirationRate.toString(),
                    bodyTemperature: element.bodyTemperature.toString(),
                    limbMovement: element.limbMovement.toString(),
                    bloodOxygen: element.bloodOxygen.toString(),
                    rem: element.rem.toString(),
                    hoursSleeping: element.hoursSleeping.toString(),
                    heartRate: element.heartRate.toString(),
                    stresState: element.stresState
                }
                result.push(data);
            });
            let datas: Datas = { datas: result };
            return Promise.resolve(datas);
        }
        catch (error) {
            throw error;
        }
    }

    async findOne(id: DataID): Promise<Data> {
        try {
            let dbResult = await this.pillowModel.findById(id._id).exec();
            let data: Data = {
                _id: dbResult._id.toString(),
                snoringRange: dbResult.snoringRange.toString(),
                respirationRate: dbResult.respirationRate.toString(),
                bodyTemperature: dbResult.bodyTemperature.toString(),
                limbMovement: dbResult.limbMovement.toString(),
                bloodOxygen: dbResult.bloodOxygen.toString(),
                rem: dbResult.rem.toString(),
                hoursSleeping: dbResult.hoursSleeping.toString(),
                heartRate: dbResult.heartRate.toString(),
                stresState: dbResult.stresState
            }
            return Promise.resolve(data);
        }
        catch (error) {
            throw error;
        }
    }

    async findByStressRate(stressRate: ParamToFind): Promise<Datas> {
        try {
            let dbResult = await this.pillowModel.find({ stresState: stressRate.value }).exec();
            let result: Data[] = [];
            dbResult.forEach((element) => {
                let data: Data = {
                    _id: element._id.toString(),
                    snoringRange: element.snoringRange.toString(),
                    respirationRate: element.respirationRate.toString(),
                    bodyTemperature: element.bodyTemperature.toString(),
                    limbMovement: element.limbMovement.toString(),
                    bloodOxygen: element.bloodOxygen.toString(),
                    rem: element.rem.toString(),
                    hoursSleeping: element.hoursSleeping.toString(),
                    heartRate: element.heartRate.toString(),
                    stresState: element.stresState
                }
                result.push(data);
            });
            let datas: Datas = { datas: result };
            return Promise.resolve(datas);
        }
        catch (error) {
            throw error;
        }

    }

    async findBySnoringRange(par: ParamsToFind): Promise<Datas> {
        try {
            let dbResult = await this.pillowModel.find({ snoringRange: { $gte: par.min, $lte: par.max } }).exec();
            let result: Data[] = [];
            dbResult.forEach((element) => {
                let data: Data = {
                    _id: element._id.toString(),
                    snoringRange: element.snoringRange.toString(),
                    respirationRate: element.respirationRate.toString(),
                    bodyTemperature: element.bodyTemperature.toString(),
                    limbMovement: element.limbMovement.toString(),
                    bloodOxygen: element.bloodOxygen.toString(),
                    rem: element.rem.toString(),
                    hoursSleeping: element.hoursSleeping.toString(),
                    heartRate: element.heartRate.toString(),
                    stresState: element.stresState
                }
                result.push(data);
            });
            let datas: Datas = { datas: result };
            return Promise.resolve(datas);
        }
        catch (error) {
            throw error;
        }
    }

    async findByRespirationRate(par: ParamsToFind): Promise<Datas> {
        try {
            let dbResult = await this.pillowModel.find({ respirationRate: { $gte: par.min, $lte: par.max } }).exec();
            let result: Data[] = [];
            dbResult.forEach((element) => {
                let data: Data = {
                    _id: element._id.toString(),
                    snoringRange: element.snoringRange.toString(),
                    respirationRate: element.respirationRate.toString(),
                    bodyTemperature: element.bodyTemperature.toString(),
                    limbMovement: element.limbMovement.toString(),
                    bloodOxygen: element.bloodOxygen.toString(),
                    rem: element.rem.toString(),
                    hoursSleeping: element.hoursSleeping.toString(),
                    heartRate: element.heartRate.toString(),
                    stresState: element.stresState
                }
                result.push(data);
            });
            let datas: Datas = { datas: result };
            return Promise.resolve(datas);
        }
        catch (error) {
            throw error;
        }
    }

    async findByHeartRate(par: ParamsToFind): Promise<Datas> {
        try {
            let dbResult = await this.pillowModel.find({ heartRate: { $gte: par.min, $lte: par.max } }).exec();
            let result: Data[] = [];
            dbResult.forEach((element) => {
                let data: Data = {
                    _id: element._id.toString(),
                    snoringRange: element.snoringRange.toString(),
                    respirationRate: element.respirationRate.toString(),
                    bodyTemperature: element.bodyTemperature.toString(),
                    limbMovement: element.limbMovement.toString(),
                    bloodOxygen: element.bloodOxygen.toString(),
                    rem: element.rem.toString(),
                    hoursSleeping: element.hoursSleeping.toString(),
                    heartRate: element.heartRate.toString(),
                    stresState: element.stresState
                }
                result.push(data);
            });
            let datas: Datas = { datas: result };
            return Promise.resolve(datas);
        }
        catch (error) {
            throw error;
        }
    }

    async update(newData: Data): Promise<Data> {
        try {
            let updated = await this.pillowModel.findByIdAndUpdate(newData._id, newData, { new: true });
            let data: Data = {
                _id: updated._id.toString(),
                snoringRange: updated.snoringRange,
                respirationRate: updated.respirationRate,
                bodyTemperature: updated.bodyTemperature,
                limbMovement: updated.limbMovement,
                bloodOxygen: updated.bloodOxygen,
                rem: updated.rem,
                hoursSleeping: updated.hoursSleeping,
                heartRate: updated.heartRate,
                stresState: updated.stresState
            }
            return Promise.resolve(data);
        }
        catch (error) {
            throw error;
        }
    }

    async delete(id: DataID): Promise<any> {
        try {
            await this.pillowModel.findByIdAndDelete(id._id).exec();
            return;
        }
        catch (error) {
            throw error;
        }
    }

    async clearDatabase(): Promise<void> {
        try {
            await this.pillowModel.deleteMany({}).exec();
            return;
        }
        catch (error) {
            throw error;
        }
    }
    async getAvgHeartRate(): Promise<AvgHeartRate> {
        try {
            let dbResult = await this.pillowModel.aggregate([
                {
                    $group: {
                        _id: null,
                        avgHeartRate: { $avg: "$heartRate" }
                    }
                }
            ]).exec();
            console.log(dbResult);
            let data: AvgHeartRate = {
                avgHeartRate: dbResult[0].avgHeartRate.toString()
            }
            return Promise.resolve(data);
        }
        catch (error) {
            throw error;
        }
    }

    async getAvgStressLevel(): Promise<AvgStressLevel> {
        try {
            let dbResult = await this.pillowModel.aggregate([
                {
                    $group: {
                        _id: null,
                        avgStressLevel: { $avg: "$stresState" }
                    }
                }
            ]).exec();
            let data: AvgStressLevel = {
                avgStressLevel: dbResult[0].avgStressLevel.toString()
            }
            return Promise.resolve(data);
        }
        catch (error) {
            throw error;
        }
    }
}
