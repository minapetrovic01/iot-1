// Original file: src/protos/pillow.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AvgHeartRate as _pillow_AvgHeartRate, AvgHeartRate__Output as _pillow_AvgHeartRate__Output } from '../pillow/AvgHeartRate';
import type { AvgStressLevel as _pillow_AvgStressLevel, AvgStressLevel__Output as _pillow_AvgStressLevel__Output } from '../pillow/AvgStressLevel';
import type { Data as _pillow_Data, Data__Output as _pillow_Data__Output } from '../pillow/Data';
import type { DataDto as _pillow_DataDto, DataDto__Output as _pillow_DataDto__Output } from '../pillow/DataDto';
import type { DataID as _pillow_DataID, DataID__Output as _pillow_DataID__Output } from '../pillow/DataID';
import type { Datas as _pillow_Datas, Datas__Output as _pillow_Datas__Output } from '../pillow/Datas';
import type { Empty as _pillow_Empty, Empty__Output as _pillow_Empty__Output } from '../pillow/Empty';
import type { ParamToFind as _pillow_ParamToFind, ParamToFind__Output as _pillow_ParamToFind__Output } from '../pillow/ParamToFind';
import type { ParamsToFind as _pillow_ParamsToFind, ParamsToFind__Output as _pillow_ParamsToFind__Output } from '../pillow/ParamsToFind';

export interface PillowClient extends grpc.Client {
  AddData(argument: _pillow_DataDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  AddData(argument: _pillow_DataDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  AddData(argument: _pillow_DataDto, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  AddData(argument: _pillow_DataDto, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  addData(argument: _pillow_DataDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  addData(argument: _pillow_DataDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  addData(argument: _pillow_DataDto, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  addData(argument: _pillow_DataDto, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  
  DeleteData(argument: _pillow_DataID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  DeleteData(argument: _pillow_DataID, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  DeleteData(argument: _pillow_DataID, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  DeleteData(argument: _pillow_DataID, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  deleteData(argument: _pillow_DataID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  deleteData(argument: _pillow_DataID, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  deleteData(argument: _pillow_DataID, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  deleteData(argument: _pillow_DataID, callback: grpc.requestCallback<_pillow_Empty__Output>): grpc.ClientUnaryCall;
  
  GetAvgHeartRate(argument: _pillow_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_AvgHeartRate__Output>): grpc.ClientUnaryCall;
  GetAvgHeartRate(argument: _pillow_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_AvgHeartRate__Output>): grpc.ClientUnaryCall;
  GetAvgHeartRate(argument: _pillow_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_AvgHeartRate__Output>): grpc.ClientUnaryCall;
  GetAvgHeartRate(argument: _pillow_Empty, callback: grpc.requestCallback<_pillow_AvgHeartRate__Output>): grpc.ClientUnaryCall;
  getAvgHeartRate(argument: _pillow_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_AvgHeartRate__Output>): grpc.ClientUnaryCall;
  getAvgHeartRate(argument: _pillow_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_AvgHeartRate__Output>): grpc.ClientUnaryCall;
  getAvgHeartRate(argument: _pillow_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_AvgHeartRate__Output>): grpc.ClientUnaryCall;
  getAvgHeartRate(argument: _pillow_Empty, callback: grpc.requestCallback<_pillow_AvgHeartRate__Output>): grpc.ClientUnaryCall;
  
  GetAvgStressLevel(argument: _pillow_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_AvgStressLevel__Output>): grpc.ClientUnaryCall;
  GetAvgStressLevel(argument: _pillow_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_AvgStressLevel__Output>): grpc.ClientUnaryCall;
  GetAvgStressLevel(argument: _pillow_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_AvgStressLevel__Output>): grpc.ClientUnaryCall;
  GetAvgStressLevel(argument: _pillow_Empty, callback: grpc.requestCallback<_pillow_AvgStressLevel__Output>): grpc.ClientUnaryCall;
  getAvgStressLevel(argument: _pillow_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_AvgStressLevel__Output>): grpc.ClientUnaryCall;
  getAvgStressLevel(argument: _pillow_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_AvgStressLevel__Output>): grpc.ClientUnaryCall;
  getAvgStressLevel(argument: _pillow_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_AvgStressLevel__Output>): grpc.ClientUnaryCall;
  getAvgStressLevel(argument: _pillow_Empty, callback: grpc.requestCallback<_pillow_AvgStressLevel__Output>): grpc.ClientUnaryCall;
  
  GetData(argument: _pillow_DataID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  GetData(argument: _pillow_DataID, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  GetData(argument: _pillow_DataID, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  GetData(argument: _pillow_DataID, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  getData(argument: _pillow_DataID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  getData(argument: _pillow_DataID, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  getData(argument: _pillow_DataID, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  getData(argument: _pillow_DataID, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  
  GetDatas(argument: _pillow_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetDatas(argument: _pillow_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetDatas(argument: _pillow_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetDatas(argument: _pillow_Empty, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getDatas(argument: _pillow_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getDatas(argument: _pillow_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getDatas(argument: _pillow_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getDatas(argument: _pillow_Empty, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  
  GetPillowsByHeartRate(argument: _pillow_ParamsToFind, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetPillowsByHeartRate(argument: _pillow_ParamsToFind, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetPillowsByHeartRate(argument: _pillow_ParamsToFind, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetPillowsByHeartRate(argument: _pillow_ParamsToFind, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsByHeartRate(argument: _pillow_ParamsToFind, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsByHeartRate(argument: _pillow_ParamsToFind, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsByHeartRate(argument: _pillow_ParamsToFind, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsByHeartRate(argument: _pillow_ParamsToFind, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  
  GetPillowsByRespirationRate(argument: _pillow_ParamsToFind, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetPillowsByRespirationRate(argument: _pillow_ParamsToFind, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetPillowsByRespirationRate(argument: _pillow_ParamsToFind, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetPillowsByRespirationRate(argument: _pillow_ParamsToFind, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsByRespirationRate(argument: _pillow_ParamsToFind, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsByRespirationRate(argument: _pillow_ParamsToFind, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsByRespirationRate(argument: _pillow_ParamsToFind, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsByRespirationRate(argument: _pillow_ParamsToFind, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  
  GetPillowsBySnoringRange(argument: _pillow_ParamsToFind, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetPillowsBySnoringRange(argument: _pillow_ParamsToFind, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetPillowsBySnoringRange(argument: _pillow_ParamsToFind, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetPillowsBySnoringRange(argument: _pillow_ParamsToFind, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsBySnoringRange(argument: _pillow_ParamsToFind, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsBySnoringRange(argument: _pillow_ParamsToFind, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsBySnoringRange(argument: _pillow_ParamsToFind, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsBySnoringRange(argument: _pillow_ParamsToFind, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  
  GetPillowsByStressRate(argument: _pillow_ParamToFind, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetPillowsByStressRate(argument: _pillow_ParamToFind, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetPillowsByStressRate(argument: _pillow_ParamToFind, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  GetPillowsByStressRate(argument: _pillow_ParamToFind, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsByStressRate(argument: _pillow_ParamToFind, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsByStressRate(argument: _pillow_ParamToFind, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsByStressRate(argument: _pillow_ParamToFind, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  getPillowsByStressRate(argument: _pillow_ParamToFind, callback: grpc.requestCallback<_pillow_Datas__Output>): grpc.ClientUnaryCall;
  
  UpdateData(argument: _pillow_Data, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  UpdateData(argument: _pillow_Data, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  UpdateData(argument: _pillow_Data, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  UpdateData(argument: _pillow_Data, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  updateData(argument: _pillow_Data, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  updateData(argument: _pillow_Data, metadata: grpc.Metadata, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  updateData(argument: _pillow_Data, options: grpc.CallOptions, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  updateData(argument: _pillow_Data, callback: grpc.requestCallback<_pillow_Data__Output>): grpc.ClientUnaryCall;
  
}

export interface PillowHandlers extends grpc.UntypedServiceImplementation {
  AddData: grpc.handleUnaryCall<_pillow_DataDto__Output, _pillow_Empty>;
  
  DeleteData: grpc.handleUnaryCall<_pillow_DataID__Output, _pillow_Empty>;
  
  GetAvgHeartRate: grpc.handleUnaryCall<_pillow_Empty__Output, _pillow_AvgHeartRate>;
  
  GetAvgStressLevel: grpc.handleUnaryCall<_pillow_Empty__Output, _pillow_AvgStressLevel>;
  
  GetData: grpc.handleUnaryCall<_pillow_DataID__Output, _pillow_Data>;
  
  GetDatas: grpc.handleUnaryCall<_pillow_Empty__Output, _pillow_Datas>;
  
  GetPillowsByHeartRate: grpc.handleUnaryCall<_pillow_ParamsToFind__Output, _pillow_Datas>;
  
  GetPillowsByRespirationRate: grpc.handleUnaryCall<_pillow_ParamsToFind__Output, _pillow_Datas>;
  
  GetPillowsBySnoringRange: grpc.handleUnaryCall<_pillow_ParamsToFind__Output, _pillow_Datas>;
  
  GetPillowsByStressRate: grpc.handleUnaryCall<_pillow_ParamToFind__Output, _pillow_Datas>;
  
  UpdateData: grpc.handleUnaryCall<_pillow_Data__Output, _pillow_Data>;
  
}

export interface PillowDefinition extends grpc.ServiceDefinition {
  AddData: MethodDefinition<_pillow_DataDto, _pillow_Empty, _pillow_DataDto__Output, _pillow_Empty__Output>
  DeleteData: MethodDefinition<_pillow_DataID, _pillow_Empty, _pillow_DataID__Output, _pillow_Empty__Output>
  GetAvgHeartRate: MethodDefinition<_pillow_Empty, _pillow_AvgHeartRate, _pillow_Empty__Output, _pillow_AvgHeartRate__Output>
  GetAvgStressLevel: MethodDefinition<_pillow_Empty, _pillow_AvgStressLevel, _pillow_Empty__Output, _pillow_AvgStressLevel__Output>
  GetData: MethodDefinition<_pillow_DataID, _pillow_Data, _pillow_DataID__Output, _pillow_Data__Output>
  GetDatas: MethodDefinition<_pillow_Empty, _pillow_Datas, _pillow_Empty__Output, _pillow_Datas__Output>
  GetPillowsByHeartRate: MethodDefinition<_pillow_ParamsToFind, _pillow_Datas, _pillow_ParamsToFind__Output, _pillow_Datas__Output>
  GetPillowsByRespirationRate: MethodDefinition<_pillow_ParamsToFind, _pillow_Datas, _pillow_ParamsToFind__Output, _pillow_Datas__Output>
  GetPillowsBySnoringRange: MethodDefinition<_pillow_ParamsToFind, _pillow_Datas, _pillow_ParamsToFind__Output, _pillow_Datas__Output>
  GetPillowsByStressRate: MethodDefinition<_pillow_ParamToFind, _pillow_Datas, _pillow_ParamToFind__Output, _pillow_Datas__Output>
  UpdateData: MethodDefinition<_pillow_Data, _pillow_Data, _pillow_Data__Output, _pillow_Data__Output>
}
