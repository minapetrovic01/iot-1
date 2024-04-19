import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { PillowService } from './pillow.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Datas } from 'src/protos/pillow/Datas';
import { DataID } from 'src/protos/pillow/DataID';
import { ParamsToFind } from 'src/protos/pillow/ParamsToFind';
import { DataDto } from 'src/protos/pillow/DataDto';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { ParamToFind } from 'src/protos/pillow/ParamToFind';
import { Data } from 'src/protos/pillow/Data';
import { Empty } from 'src/protos/pillow/Empty';
import { AvgHeartRate } from 'src/protos/pillow/AvgHeartRate';
import { AvgStressLevel } from 'src/protos/pillow/AvgStressLevel';

@Controller('pillow')
export class PillowController {

    constructor(private readonly pillowService:PillowService) {}

    @GrpcMethod('Pillow', 'GetDatas')
    async getDatas(metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Datas> {
      const data = await this.pillowService.findAll();
      return data;
    }
  
    @GrpcMethod('Pillow', 'GetData')
    async getData(dataID: DataID,metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Data> {
      const data = await this.pillowService.findOne(dataID);
      return data;
    }
  
    @GrpcMethod('Pillow', 'GetPillowsByStressRate')
    async getPillowsByStressRate(params: ParamToFind,metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Datas> {
      const data = await this.pillowService.findByStressRate(params);
      return data;
    }
    
    @GrpcMethod('Pillow', 'GetPillowsByHeartRate')
    async getPillowsByHeartRate(params: ParamsToFind,metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Datas> {
      const data = await this.pillowService.findByHeartRate(params);
      return data;
    }

    @GrpcMethod('Pillow', 'GetPillowsBySnoringRange')
    async getPillowsBySnoringRange(params: ParamsToFind,metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Datas> {
      const data = await this.pillowService.findBySnoringRange(params);
      return data;
    }

    @GrpcMethod('Pillow', 'GetPillowsByRespirationRate')
    async getPillowsByRespirationRate(params: ParamsToFind,metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Datas> {
      const data = await this.pillowService.findByRespirationRate(params);
      return data;
    }

    @GrpcMethod('Pillow', 'AddData')
    async addData(data: DataDto,metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Empty> {
      const dataToReturn = await this.pillowService.create(data);
      return {};
    }

    @GrpcMethod('Pillow', 'UpdateData')	
    async updateData(data: DataDto,metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Data> {
      const dataToReturn = await this.pillowService.update(data);
      return dataToReturn;
    }

    @GrpcMethod('Pillow', 'DeleteData')
    async deleteData(dataID: DataID,metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<Empty> {
      const data = await this.pillowService.delete(dataID);
      return {};
    }

    @GrpcMethod('Pillow', 'GetAvgHeartRate')
    async getAvgHeartRate(metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<AvgHeartRate> {
      const data = await this.pillowService.getAvgHeartRate();
      return data;
    }
    @GrpcMethod('Pillow', 'GetAvgStressLevel')
    async getAvgStressLevel(metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<AvgStressLevel> {
      const data = await this.pillowService.getAvgStressLevel();
      return data;
    }

   
    
}
