import numpy as np
import random
import math
from typing import Dict, List, Tuple

# ================== QUIZ QUESTIONS ==================
quiz_questions = {
    # Extraversion (E) - 10 questions (indices 0-9)
    'EXT1': {'question': 'I am the life of the party', 'contribution': +1},
    'EXT2': {'question': "I don't talk a lot", 'contribution': -1},
    'EXT3': {'question': 'I feel comfortable around people', 'contribution': +1},
    'EXT4': {'question': 'I keep in the background', 'contribution': -1},
    'EXT5': {'question': 'I start conversations', 'contribution': +1},
    'EXT6': {'question': 'I have little to say', 'contribution': -1},
    'EXT7': {'question': 'I talk to a lot of different people at parties', 'contribution': +1},
    'EXT8': {'question': "I don't like to draw attention to myself", 'contribution': -1},
    'EXT9': {'question': "I don't mind being the center of attention", 'contribution': +1},
    'EXT10': {'question': 'I am quiet around strangers', 'contribution': -1},

    # Neuroticism (N) - 10 questions (indices 10-19)
    'NEU1': {'question': 'I get stressed out easily', 'contribution': +1},
    'NEU2': {'question': 'I am relaxed most of the time', 'contribution': -1},
    'NEU3': {'question': 'I worry about things', 'contribution': +1},
    'NEU4': {'question': 'I seldom feel blue', 'contribution': -1},
    'NEU5': {'question': 'I am easily disturbed', 'contribution': +1},
    'NEU6': {'question': 'I get upset easily', 'contribution': +1},
    'NEU7': {'question': 'I change my mood a lot', 'contribution': +1},
    'NEU8': {'question': 'I have frequent mood swings', 'contribution': +1},
    'NEU9': {'question': 'I get irritated easily', 'contribution': +1},
    'NEU10': {'question': 'I often feel blue', 'contribution': +1},

    # Agreeableness (A) - 10 questions (indices 20-29)
    'AGR1': {'question': 'I feel little concern for others', 'contribution': -1},
    'AGR2': {'question': 'I am interested in people', 'contribution': +1},
    'AGR3': {'question': 'I insult people', 'contribution': -1},
    'AGR4': {'question': "I sympathize with others' feelings", 'contribution': +1},
    'AGR5': {'question': "I am not interested in other people's problems", 'contribution': -1},
    'AGR6': {'question': 'I have a soft heart', 'contribution': +1},
    'AGR7': {'question': 'I am not really interested in others', 'contribution': -1},
    'AGR8': {'question': 'I take time out for others', 'contribution': +1},
    'AGR9': {'question': "I feel others' emotions", 'contribution': +1},
    'AGR10': {'question': 'I make people feel at ease', 'contribution': +1},

    # Conscientiousness (C) - 10 questions (indices 30-39)
    'CSN1': {'question': 'I am always prepared', 'contribution': +1},
    'CSN2': {'question': 'I leave my belongings around', 'contribution': -1},
    'CSN3': {'question': 'I pay attention to details', 'contribution': +1},
    'CSN4': {'question': 'I make a mess of things', 'contribution': -1},
    'CSN5': {'question': 'I get chores done right away', 'contribution': +1},
    'CSN6': {'question': 'I often forget to put things back in their proper place', 'contribution': -1},
    'CSN7': {'question': 'I like order', 'contribution': +1},
    'CSN8': {'question': 'I shirk my duties', 'contribution': -1},
    'CSN9': {'question': 'I follow a schedule', 'contribution': +1},
    'CSN10': {'question': 'I am exacting in my work', 'contribution': +1},

    # Openness (O) - 10 questions (indices 40-49)
    'OPN1': {'question': 'I have a rich vocabulary', 'contribution': +1},
    'OPN2': {'question': 'I have difficulty understanding abstract ideas', 'contribution': -1},
    'OPN3': {'question': 'I have a vivid imagination', 'contribution': +1},
    'OPN4': {'question': 'I am not interested in abstract ideas', 'contribution': -1},
    'OPN5': {'question': 'I have excellent ideas', 'contribution': +1},
    'OPN6': {'question': 'I do not have a good imagination', 'contribution': -1},
    'OPN7': {'question': 'I am quick to understand things', 'contribution': +1},
    'OPN8': {'question': 'I use difficult words', 'contribution': +1},
    'OPN9': {'question': 'I spend time reflecting on things', 'contribution': +1},
    'OPN10': {'question': 'I am full of ideas', 'contribution': +1}
}

# ================== OPTIMIZED MBTI PROFILES ==================
# Format: [Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism]
# Scores are on a scale of 1-10, optimized to prevent type confusion
mbti_profiles = {
    # Introverted Sensing Types (IS__)
    'ISTJ': {'name': 'The Inspector', 'profile': [3.0, 9.0, 2.0, 6.0, 2.5]},      # Low O, Very High C, Low E
    'ISFJ': {'name': 'The Protector', 'profile': [3.5, 8.5, 2.5, 9.0, 3.5]},     # Low O, High C, Low E, High A
    'ISTP': {'name': 'The Craftsman', 'profile': [5.5, 3.0, 1.5, 3.5, 2.5]},     # Med O, Very Low C, Very Low E, Low A
    'ISFP': {'name': 'The Composer', 'profile': [6.0, 2.5, 2.0, 8.5, 6.5]},      # Med O, Very Low C, Low E, High A, High N
    
    # Introverted Intuitive Types (IN__)
    'INTJ': {'name': 'The Mastermind', 'profile': [8.5, 8.0, 1.0, 3.0, 3.5]},    # High O, High C, Very Low E, Low A
    'INFJ': {'name': 'The Counselor', 'profile': [8.0, 7.0, 1.5, 9.5, 5.0]},     # High O, High C, Very Low E, Very High A
    'INTP': {'name': 'The Architect', 'profile': [9.5, 2.0, 1.0, 4.0, 4.0]},     # Very High O, Very Low C, Very Low E, Low A
    'INFP': {'name': 'The Healer', 'profile': [9.0, 2.0, 1.5, 9.5, 7.5]},       # High O, Very Low C, Very Low E, Very High A, High N
    
    # Extraverted Sensing Types (ES__)
    'ESTJ': {'name': 'The Supervisor', 'profile': [2.5, 9.5, 8.5, 5.0, 2.0]},    # Very Low O, Very High C, High E
    'ESFJ': {'name': 'The Provider', 'profile': [3.0, 8.5, 8.0, 9.5, 2.5]},      # Low O, High C, High E, Very High A
    'ESTP': {'name': 'The Dynamo', 'profile': [4.5, 2.5, 9.5, 5.0, 1.5]},        # Low O, Very Low C, Very High E
    'ESFP': {'name': 'The Performer', 'profile': [5.5, 2.0, 9.5, 8.5, 3.0]},     # Med O, Very Low C, Very High E, High A
    
    # Extraverted Intuitive Types (EN__)
    'ENTJ': {'name': 'The Commander', 'profile': [7.5, 9.0, 8.5, 3.5, 2.0]},     # High O, Very High C, High E, Low A
    'ENFJ': {'name': 'The Teacher', 'profile': [7.0, 7.5, 8.0, 9.5, 3.0]},       # High O, High C, High E, Very High A
    'ENTP': {'name': 'The Visionary', 'profile': [9.5, 2.5, 8.5, 5.0, 2.5]},     # Very High O, Very Low C, High E
    'ENFP': {'name': 'The Champion', 'profile': [9.0, 2.0, 8.5, 8.5, 4.0]}       # High O, Very Low C, High E, High A
}

# ================== CLUSTER PROFILES ==================
cluster_profiles = {
    0: {
        'name': 'Analyst',
        'description': 'Logical and independent thinkers who value intelligence and competence.',
        'profile': [8.5, 7.0, 2.0, 3.0, 3.5]
    },
    1: {
        'name': 'Diplomat',
        'description': 'Empathetic and idealistic individuals who strive for harmony.',
        'profile': [7.5, 6.0, 3.5, 9.0, 5.0]
    },
    2: {
        'name': 'Sentinel',
        'description': 'Reliable, practical people who value stability and duty.',
        'profile': [5.0, 9.0, 3.5, 6.0, 3.0]
    },
    3: {
        'name': 'Explorer',
        'description': 'Spontaneous and flexible individuals who enjoy new experiences.',
        'profile': [6.5, 3.5, 8.0, 5.5, 4.0]
    }
}

def compute_ocean_scores(answers: List[int]) -> Dict[str, float]:
    """
    Compute OCEAN scores from 50 quiz answers.
    Each answer is expected to be an integer between 1 and 5.
    """
    if len(answers) != 50:
        raise ValueError(f"Expected 50 answers, got {len(answers)}")
    
    # Define question indices for each trait
    OCEAN_QUESTIONS = {
        'E': {'pos': [0, 2, 4, 6, 8], 'neg': [1, 3, 5, 7, 9]},           # Extraversion
        'N': {'pos': [10, 12, 14, 15, 16, 17, 18, 19], 'neg': [11, 13]}, # Neuroticism
        'A': {'pos': [21, 23, 25, 27, 28, 29], 'neg': [20, 22, 24, 26]}, # Agreeableness
        'C': {'pos': [30, 32, 34, 36, 38, 39], 'neg': [31, 33, 35, 37]}, # Conscientiousness
        'O': {'pos': [40, 42, 44, 46, 47, 48, 49], 'neg': [41, 43, 45]}  # Openness
    }

    ocean_scores = {}
    
    for trait, q_data in OCEAN_QUESTIONS.items():
        total = 0
        count = 0
        
        # Positive contribution questions
        for idx in q_data['pos']:
            if idx < len(answers):
                total += answers[idx]
                count += 1
        
        # Negative contribution questions (reverse scoring)
        for idx in q_data['neg']:
            if idx < len(answers):
                total += (6 - answers[idx])  # reverse scoring
                count += 1
        
        # Normalize to 0-10 scale
        if count > 0:
            ocean_scores[trait] = round((total / count) * 2, 1)  # Scale from 1-5 to 2-10
        else:
            ocean_scores[trait] = 5.0  # Default middle value
    
    return ocean_scores

def infer_mbti_from_ocean(ocean_scores: Dict[str, float]) -> Tuple[str, float]:
    """
    Infers the closest MBTI type by calculating the Euclidean distance
    between the user's OCEAN scores and each MBTI profile.
    Returns the best match and the distance.
    """
    min_distance = float('inf')
    best_match = None

    # Vector ordering: [O, C, E, A, N]
    user_vector = [
        ocean_scores['O'],
        ocean_scores['C'],
        ocean_scores['E'],
        ocean_scores['A'],
        ocean_scores['N']
    ]

    distances = {}
    for mbti_type, data in mbti_profiles.items():
        profile_vector = data['profile']
        # Euclidean distance
        distance = math.sqrt(sum((u - p) ** 2 for u, p in zip(user_vector, profile_vector)))
        distances[mbti_type] = distance
        
        if distance < min_distance:
            min_distance = distance
            best_match = mbti_type

    return best_match, min_distance

def infer_cluster(ocean_scores: Dict[str, float]) -> int:
    user_vec = [ocean_scores[t] for t in ['O', 'C', 'E', 'A', 'N']]
    best_id, min_dist = 0, float('inf')
    for cluster_id, cluster in cluster_profiles.items():
        dist = math.sqrt(sum((u - p) ** 2 for u, p in zip(user_vec, cluster['profile'])))
        if dist < min_dist:
            min_dist, best_id = dist, cluster_id
    return best_id

# def generate_synthetic_answers(target_mbti: str, noise_level: float = 0.3) -> List[int]:
#     """
#     Generate synthetic quiz answers that should result in the target MBTI type.
#     noise_level: amount of randomness to add (0.0 = perfect, 1.0 = completely random)
#     """
#     if target_mbti not in mbti_profiles:
#         raise ValueError(f"Unknown MBTI type: {target_mbti}")
    
#     target_profile = mbti_profiles[target_mbti]['profile']
#     # [O, C, E, A, N] -> map to OCEAN scores
#     target_ocean = {
#         'O': target_profile[0],
#         'C': target_profile[1], 
#         'E': target_profile[2],
#         'A': target_profile[3],
#         'N': target_profile[4]
#     }
    
#     answers = []
    
#     # Generate answers for each trait group
#     trait_ranges = {
#         'E': (0, 10),   # Extraversion questions 0-9
#         'N': (10, 20),  # Neuroticism questions 10-19
#         'A': (20, 30),  # Agreeableness questions 20-29
#         'C': (30, 40),  # Conscientiousness questions 30-39
#         'O': (40, 50)   # Openness questions 40-49
#     }
    
#     question_list = list(quiz_questions.keys())
    
#     for trait, (start, end) in trait_ranges.items():
#         target_score = target_ocean[trait]
#         # Convert 10-point scale back to 5-point scale base
#         base_answer = int((target_score / 10) * 4) + 1
#         base_answer = max(1, min(5, base_answer))
        
#         for i in range(start, end):
#             if i < len(question_list):
#                 q_key = question_list[i]
#                 contribution = quiz_questions[q_key]['contribution']
                
#                 # Adjust answer based on question contribution
#                 if contribution > 0:
#                     # Positive contribution - use base answer
#                     answer = base_answer
#                 else:
#                     # Negative contribution - reverse the answer
#                     answer = 6 - base_answer
                
#                 # Add noise
#                 if random.random() < noise_level:
#                     noise = random.randint(-1, 1)
#                     answer = max(1, min(5, answer + noise))
                
#                 answers.append(answer)
#             else:
#                 answers.append(3)  # Default neutral answer
    
#     return answers

# def test_all_mbti_types(noise_level: float = 0.2, num_tests_per_type: int = 5) -> Dict:
#     """
#     Test the MBTI classification system with synthetic data for all 16 types.
#     Returns accuracy statistics.
#     """
#     print("=" * 60)
#     print("TESTING MBTI CLASSIFICATION SYSTEM")
#     print("=" * 60)
    
#     results = {
#         'correct': 0,
#         'total': 0,
#         'type_accuracy': {},
#         'confusion_matrix': {},
#         'failed_cases': []
#     }
    
#     for target_type in mbti_profiles.keys():
#         correct_for_type = 0
#         predictions_for_type = []
        
#         print(f"\nTesting {target_type} ({mbti_profiles[target_type]['name']}):")
        
#         for test_num in range(num_tests_per_type):
#             # Generate synthetic answers
#             synthetic_answers = generate_synthetic_answers(target_type, noise_level)
            
#             # Run the quiz
#             ocean_scores = compute_ocean_scores(synthetic_answers)
#             predicted_type, distance = infer_mbti_from_ocean(ocean_scores)
            
#             predictions_for_type.append(predicted_type)
#             results['total'] += 1
            
#             if predicted_type == target_type:
#                 correct_for_type += 1
#                 results['correct'] += 1
#                 status = "✓"
#             else:
#                 status = "✗"
#                 results['failed_cases'].append({
#                     'target': target_type,
#                     'predicted': predicted_type,
#                     'distance': distance,
#                     'ocean_scores': ocean_scores
#                 })
            
#             print(f"  Test {test_num + 1}: {predicted_type} {status} (distance: {distance:.2f})")
        
#         accuracy = (correct_for_type / num_tests_per_type) * 100
#         results['type_accuracy'][target_type] = accuracy
        
#         # Count predictions for confusion matrix
#         if target_type not in results['confusion_matrix']:
#             results['confusion_matrix'][target_type] = {}
        
#         for pred in predictions_for_type:
#             if pred not in results['confusion_matrix'][target_type]:
#                 results['confusion_matrix'][target_type][pred] = 0
#             results['confusion_matrix'][target_type][pred] += 1
        
#         print(f"  Accuracy for {target_type}: {accuracy:.1f}%")
    
#     return results

# def calculate_profile_distances():
#     """Calculate distances between all MBTI type profiles to identify potential confusion."""
#     print("\n" + "=" * 60)
#     print("MBTI PROFILE DISTANCE ANALYSIS")
#     print("=" * 60)
    
#     distances = {}
#     min_distances = []
    
#     types = list(mbti_profiles.keys())
#     for i, type1 in enumerate(types):
#         for j, type2 in enumerate(types):
#             if i < j:  # Only calculate each pair once
#                 profile1 = mbti_profiles[type1]['profile']
#                 profile2 = mbti_profiles[type2]['profile']
                
#                 distance = math.sqrt(sum((p1 - p2) ** 2 for p1, p2 in zip(profile1, profile2)))
#                 distances[(type1, type2)] = distance
#                 min_distances.append(distance)
    
#     # Show the closest pairs (most likely to be confused)
#     sorted_distances = sorted(distances.items(), key=lambda x: x[1])
    
#     print("Closest Type Pairs (most likely to be confused):")
#     for (type1, type2), distance in sorted_distances[:10]:
#         status = "⚠️" if distance < 3.0 else "✅"
#         print(f"  {type1} ↔ {type2}: {distance:.2f} {status}")
    
#     avg_distance = sum(min_distances) / len(min_distances)
#     min_distance = min(min_distances)
    
#     print(f"\nDistance Statistics:")
#     print(f"  Minimum distance: {min_distance:.2f}")
#     print(f"  Average distance: {avg_distance:.2f}")
#     print(f"  Separation quality: {'✅ GOOD' if min_distance >= 2.5 else '⚠️ NEEDS IMPROVEMENT'}")

# def print_test_summary(results: Dict):
#     """Print a summary of the test results."""
#     print("\n" + "=" * 60)
#     print("TEST SUMMARY")
#     print("=" * 60)
    
#     overall_accuracy = (results['correct'] / results['total']) * 100
#     print(f"Overall Accuracy: {overall_accuracy:.1f}% ({results['correct']}/{results['total']})")
    
#     print(f"\nPer-Type Accuracy:")
#     for mbti_type, accuracy in sorted(results['type_accuracy'].items()):
#         status = "✓" if accuracy >= 80 else "⚠" if accuracy >= 60 else "✗"
#         print(f"  {mbti_type}: {accuracy:5.1f}% {status}")
    
#     if results['failed_cases']:
#         print(f"\nFailed Cases ({len(results['failed_cases'])}):")
#         for case in results['failed_cases'][:10]:  # Show first 10 failures
#             print(f"  {case['target']} → {case['predicted']} (distance: {case['distance']:.2f})")
#         if len(results['failed_cases']) > 10:
#             print(f"  ... and {len(results['failed_cases']) - 10} more")
    
#     print(f"\nSystem Status: {'✅ READY' if overall_accuracy >= 95 else '⚠️ GOOD' if overall_accuracy >= 85 else '❌ NEEDS IMPROVEMENT'}")
    
#     # Show profile distance analysis
#     calculate_profile_distances()

def run_personality_quiz(answers_dict: Dict[str, int], silent=False) -> Tuple[Dict[str, float], int, str]:
    keys = sorted(quiz_questions.keys(), key=lambda k: int(''.join(filter(str.isdigit, k))))
    answers = [answers_dict[k] for k in keys]
    ocean = compute_ocean_scores(answers)
    mbti, _ = infer_mbti_from_ocean(ocean)
    cluster_id = infer_cluster(ocean)
    if not silent:
        print(f"OCEAN: {ocean} | MBTI: {mbti} | Cluster: {cluster_id}")
    return ocean, cluster_id, mbti

# # Example usage and comprehensive testing
# if __name__ == '__main__':
#     print("\n" + "=" * 60)
#     print("RUNNING MBTI QUIZ FOR ALL 16 TYPES (Generated Answers)")
#     print("=" * 60)

#     for mbti in mbti_profiles.keys():
#         print(f"\n--- Expected MBTI: {mbti} ({mbti_profiles[mbti]['name']}) ---")
#         answers = generate_synthetic_answers(mbti, noise_level=0.2)
#         result_type, ocean = run_mbti_quiz(answers)
        
    # summary = []

    # for mbti in mbti_profiles.keys():
    #     answers = generate_synthetic_answers(mbti, noise_level=0.2)
    #     result_type, ocean = run_mbti_quiz(answers)
    #     summary.append((mbti, result_type))

    # print("\n" + "=" * 40)
    # print("SUMMARY")
    # print("=" * 40)
    # for expected, predicted in summary:
    #     status = "✓" if expected == predicted else "✗"
    #     print(f"{expected} → {predicted} {status}")

    
