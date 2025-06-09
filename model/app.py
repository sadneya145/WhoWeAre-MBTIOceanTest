from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime
from main import run_personality_quiz, cluster_profiles  # your logic here

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
  # Enable CORS for React frontend communication

# MongoDB connection
client = MongoClient("mongodb+srv://sadneyasam05:root@main.iumeck6.mongodb.net/?retryWrites=true&w=majority&appName=main")
db = client["personality_quiz"]
results_collection = db["quiz_results"]

@app.route('/quiz', methods=['POST'])
def quiz():
    try:
        data = request.get_json(force=True)
        answers = data.get('answers')
        
        if not answers or not isinstance(answers, dict):
            return jsonify({'error': 'Invalid or missing answers'}), 400
        
        # Run quiz logic
        scores, cluster_id, mbti = run_personality_quiz(answers, silent=True)

        # Prepare document for MongoDB
        record = {
            'answers': answers,
            'scores': {k: float(v) for k, v in scores.items()},
            'cluster': {
                'id': cluster_id,
                'name': cluster_profiles[cluster_id]['name'],
                'description': cluster_profiles[cluster_id]['description'],
                'profile': cluster_profiles[cluster_id]['profile'],
            },
            'mbti': mbti,
            'submitted_at': datetime.utcnow()
        }

        # Insert result into MongoDB
        results_collection.insert_one(record)

        # Prepare response for frontend
        response = {
            'scores': record['scores'],
            'cluster': record['cluster'],
            'mbti': record['mbti']
        }
        return jsonify(response)
    
    except Exception as e:
        print(f"Error in /quiz endpoint: {e}")
        return jsonify({'error': 'Server error occurred'}), 500

@app.route('/')
def index():
    return jsonify({'message': 'Personality quiz API is running'})

# Optional route to view all results
@app.route('/results', methods=['GET'])
def get_results():
    try:
        results = list(results_collection.find({}, {'_id': 0}).sort('submitted_at', -1))
        return jsonify(results)
    except Exception as e:
        print(f"Error fetching results: {e}")
        return jsonify({'error': 'Could not fetch results'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)
