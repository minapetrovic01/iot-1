import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PillowClient as _pillow_PillowClient, PillowDefinition as _pillow_PillowDefinition } from './pillow/Pillow';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
  pillow: {
    AvgHeartRate: MessageTypeDefinition
    AvgStressLevel: MessageTypeDefinition
    Data: MessageTypeDefinition
    DataDto: MessageTypeDefinition
    DataID: MessageTypeDefinition
    Datas: MessageTypeDefinition
    Empty: MessageTypeDefinition
    ParamToFind: MessageTypeDefinition
    ParamsToFind: MessageTypeDefinition
    Pillow: SubtypeConstructor<typeof grpc.Client, _pillow_PillowClient> & { service: _pillow_PillowDefinition }
    ResponseCode: MessageTypeDefinition
  }
}

