from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['pillowdb']
collection = db['pillow']

@app.route('/data', methods=['GET'])
def get_data():
    data = list(collection.find({}))
    print(data)
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(debug=True)
