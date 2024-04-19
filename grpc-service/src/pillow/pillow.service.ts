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
    

    constructor(@InjectModel('Pillow') private readonly pillowModel: Model<Pillow>) {}

    async create(data: DataDto): Promise<Data> {
        const createdPillow = new this.pillowModel(data);
        let pillow = await createdPillow.save();
        let dataToReturn:Data={
            _id: pillow._id,
            snoringRange: pillow.snoringRange.toString(),
            respirationRate: pillow.respirationRate.toString(),
            bodyTemperature: pillow.bodyTemperature.toString(),
            limbMovement: pillow.limbMovement.toString(),
            bloodOxygen: pillow.bloodOxygen.toString(),
            rem: pillow.rem.toString(),
            hoursSleeping: pillow.hoursSleeping.toString(),
            heartRate: pillow.heartRate.toString(),
            stresState: pillow.stresState.toString()
        };
        return Promise.resolve(dataToReturn);
    }

    async findAll(): Promise<Datas> {
        let result: Data[] = [];
        let dbResult = await this.pillowModel.find().exec();
        dbResult.forEach((element) => {
            let data: Data = {
                _id: element._id,
                snoringRange: element.snoringRange.toString(),
                respirationRate: element.respirationRate.toString(),
                bodyTemperature: element.bodyTemperature.toString(),
                limbMovement: element.limbMovement.toString(),
                bloodOxygen: element.bloodOxygen.toString(),
                rem: element.rem.toString(),
                hoursSleeping: element.hoursSleeping.toString(),
                heartRate: element.heartRate.toString(),
                stresState: element.stresState.toString()
            }
            result.push(data);
        });
        let datas: Datas = { datas: result };
        return Promise.resolve(datas);
    }

    async findOne(id: DataID): Promise<Data> {
        let dbResult = await this.pillowModel.findById(id._id).exec();
        let data: Data = {
            _id: dbResult._id,
            snoringRange: dbResult.snoringRange.toString(),
            respirationRate: dbResult.respirationRate.toString(),
            bodyTemperature: dbResult.bodyTemperature.toString(),
            limbMovement: dbResult.limbMovement.toString(),
            bloodOxygen: dbResult.bloodOxygen.toString(),
            rem: dbResult.rem.toString(),
            hoursSleeping: dbResult.hoursSleeping.toString(),
            heartRate: dbResult.heartRate.toString(),
            stresState: dbResult.stresState.toString()
        }
        return Promise.resolve(data);
    }

    async findByStressRate(stressRate: ParamToFind): Promise<Datas> {
        let dbResult= await this.pillowModel.find({ stresState: stressRate.value }).exec();
        let result: Data[] = [];
        dbResult.forEach((element) => {
            let data: Data = {
                _id: element._id,
                snoringRange: element.snoringRange.toString(),
                respirationRate: element.respirationRate.toString(),
                bodyTemperature: element.bodyTemperature.toString(),
                limbMovement: element.limbMovement.toString(),
                bloodOxygen: element.bloodOxygen.toString(),
                rem: element.rem.toString(),
                hoursSleeping: element.hoursSleeping.toString(),
                heartRate: element.heartRate.toString(),
                stresState: element.stresState.toString()
            }
            result.push(data);
        });
        let datas: Datas = { datas: result };
        return Promise.resolve(datas);
    }

    async findBySnoringRange(par:ParamsToFind): Promise<Datas> {
        let dbResult = await this.pillowModel.find({ snoringRange: { $gte: par.min, $lte: par.max } }).exec();
        let result: Data[] = [];
        dbResult.forEach((element) => {
            let data: Data = {
                _id: element._id,
                snoringRange: element.snoringRange.toString(),
                respirationRate: element.respirationRate.toString(),
                bodyTemperature: element.bodyTemperature.toString(),
                limbMovement: element.limbMovement.toString(),
                bloodOxygen: element.bloodOxygen.toString(),
                rem: element.rem.toString(),
                hoursSleeping: element.hoursSleeping.toString(),
                heartRate: element.heartRate.toString(),
                stresState: element.stresState.toString()
            }
            result.push(data);
        });
        let datas: Datas = { datas: result };
        return Promise.resolve(datas);
    }

    async findByRespirationRate(par:ParamsToFind): Promise<Datas> {
        let dbResult = await this.pillowModel.find({ respirationRate: { $gte: par.min, $lte: par.max } }).exec();
        let result: Data[] = [];
        dbResult.forEach((element) => {
            let data: Data = {
                _id: element._id,
                snoringRange: element.snoringRange.toString(),
                respirationRate: element.respirationRate.toString(),
                bodyTemperature: element.bodyTemperature.toString(),
                limbMovement: element.limbMovement.toString(),
                bloodOxygen: element.bloodOxygen.toString(),
                rem: element.rem.toString(),
                hoursSleeping: element.hoursSleeping.toString(),
                heartRate: element.heartRate.toString(),
                stresState: element.stresState.toString()
            }
            result.push(data);
        });
        let datas: Datas = { datas: result };
        return Promise.resolve(datas);
    }

    async findByHeartRate(par:ParamsToFind): Promise<Datas> {
        let dbResult= await this.pillowModel.find({ heartRate: { $gte: par.min, $lte: par.max } }).exec();
        let result: Data[] = [];
        dbResult.forEach((element) => {
            let data: Data = {
                _id: element._id,
                snoringRange: element.snoringRange.toString(),
                respirationRate: element.respirationRate.toString(),
                bodyTemperature: element.bodyTemperature.toString(),
                limbMovement: element.limbMovement.toString(),
                bloodOxygen: element.bloodOxygen.toString(),
                rem: element.rem.toString(),
                hoursSleeping: element.hoursSleeping.toString(),
                heartRate: element.heartRate.toString(),
                stresState: element.stresState.toString()
            }
            result.push(data);
        });
        let datas: Datas = { datas: result };
        return Promise.resolve(datas);
    }

    async update(newData:Data): Promise<Data> {
        let updated= await this.pillowModel.findByIdAndUpdate(newData._id, newData, { new: true });
        let data: Data = {
            _id: updated._id,
            snoringRange: updated.snoringRange.toString(),
            respirationRate: updated.respirationRate.toString(),
            bodyTemperature: updated.bodyTemperature.toString(),
            limbMovement: updated.limbMovement.toString(),
            bloodOxygen: updated.bloodOxygen.toString(),
            rem: updated.rem.toString(),
            hoursSleeping: updated.hoursSleeping.toString(),
            heartRate: updated.heartRate.toString(),
            stresState: updated.stresState.toString()
        }
        return Promise.resolve(data);
    }

    async delete(id: DataID): Promise<any> {
        await this.pillowModel.findByIdAndDelete(id._id).exec();
        return;
    }

    async clearDatabase(): Promise<void> {
        await this.pillowModel.deleteMany({}).exec();
    }
    async getAvgHeartRate():Promise<AvgHeartRate> {
        let dbResult =await this.pillowModel.aggregate([
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

    async getAvgStressLevel():Promise<AvgStressLevel> {
        let dbResult =await this.pillowModel.aggregate([
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
}
