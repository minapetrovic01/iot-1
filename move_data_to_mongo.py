import csv
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')

db = client['pillowdb']

collection = db['pillows']

csv_file_path = 'C:\\Users\\minap\\ELFAK\iot\\archive\\SaYoPillow.csv'

def import_data_from_csv(csv_file_path, collection):
    with open(csv_file_path, 'r',encoding='utf-8-sig') as file:
        reader = csv.DictReader(file)
        for row in reader:
            print(row)
            data = {
                'snoringRange': row['snoringRange'],
                'respirationRate': row['respirationRate'],
                'bodyTemperature': row['bodyTemperature'],
                'limbMovement': row['limbMovement'],
                'bloodOxygen': row['bloodOxygen'],
                'rem': row['rem'],
                'hoursSleeping': row['hoursSleeping'],
                'heartRate': row['heartRate'],
                'stresState': row['stresState'],
            }
            collection.insert_one(data)
    print("Data imported successfully from CSV to MongoDB!")

import_data_from_csv(csv_file_path, collection)
