// Original file: src/protos/pillow.proto


export interface Data {
  '_id'?: (string);
  'snoringRange'?: (number | string);
  'respirationRate'?: (number | string);
  'bodyTemperature'?: (number | string);
  'limbMovement'?: (number | string);
  'bloodOxygen'?: (number | string);
  'rem'?: (number | string);
  'hoursSleeping'?: (number | string);
  'heartRate'?: (number | string);
  'stresState'?: (number);
}

export interface Data__Output {
  '_id': (string);
  'snoringRange': (number);
  'respirationRate': (number);
  'bodyTemperature': (number);
  'limbMovement': (number);
  'bloodOxygen': (number);
  'rem': (number);
  'hoursSleeping': (number);
  'heartRate': (number);
  'stresState': (number);
}
