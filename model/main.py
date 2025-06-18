import numpy as np
import random
from sklearn.metrics.pairwise import euclidean_distances

quiz_questions = {
    # Extraversion (E) - 10 questions
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

    # Neuroticism (N) - 10 questions
    'EST1': {'question': 'I get stressed out easily', 'contribution': +1},
    'EST2': {'question': 'I am relaxed most of the time', 'contribution': -1},
    'EST3': {'question': 'I worry about things', 'contribution': +1},
    'EST4': {'question': 'I seldom feel blue', 'contribution': -1},
    'EST5': {'question': 'I am easily disturbed', 'contribution': +1},
    'EST6': {'question': 'I get upset easily', 'contribution': +1},
    'EST7': {'question': 'I change my mood a lot', 'contribution': +1},
    'EST8': {'question': 'I have frequent mood swings', 'contribution': +1},
    'EST9': {'question': 'I get irritated easily', 'contribution': +1},
    'EST10': {'question': 'I often feel blue', 'contribution': +1},

    # Agreeableness (A) - 10 questions
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

    # Conscientiousness (C) - 10 questions
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

    # Openness (O) - 10 questions
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


# Cluster profiles
cluster_profiles = {
    0: {'name': 'Social Harmonizers', 'profile': [7.5, 6.9, 7.0, 7.9, 3.4], 'description': 'Warm, cooperative people who love new experiences but stay emotionally stable'},
    1: {'name': 'Quiet Contemplators', 'profile': [6.3, 5.2, 4.3, 4.9, 3.8], 'description': 'Thoughtful introverts who prefer depth over breadth'},
    2: {'name': 'Anxious Creatives', 'profile': [6.6, 4.7, 2.6, 5.7, 7.1], 'description': 'Sensitive artists who feel deeply but prefer solitude'},
    3: {'name': 'Reliable Introverts', 'profile': [7.0, 7.1, 3.6, 7.4, 5.2], 'description': 'Dependable helpers who work behind the scenes'},
    4: {'name': 'Spirited Idealists', 'profile': [7.3, 4.9, 6.4, 7.2, 6.5], 'description': 'Passionate visionaries who care deeply about others and new ideas'}
}


def normalize_score(raw_score, num_positive, num_negative):
    max_possible = num_positive * 5 * 1 + num_negative * 1 * (-1)
    min_possible = num_positive * 1 * 1 + num_negative * 5 * (-1)
    if max_possible == min_possible:
        return 5.0
    normalized = 10 * (raw_score - min_possible) / (max_possible - min_possible)
    return max(0, min(10, normalized))

def infer_mbti(ocean_scores):
    """Derive MBTI type from OCEAN scores."""
    mbti = ""

    # Extraversion vs Introversion
    mbti += "E" if ocean_scores['E'] >= 5 else "I"

    # Sensing vs Intuition – correlate to Openness
    mbti += "N" if ocean_scores['O'] >= 5 else "S"

    # Thinking vs Feeling – correlate to Agreeableness
    mbti += "F" if ocean_scores['A'] >= 5 else "T"

    # Judging vs Perceiving – correlate to Conscientiousness
    mbti += "J" if ocean_scores['C'] >= 5 else "P"

    return mbti

# def run_personality_quiz(test_mode=False):
#     print("="*60)
#     print("           OCEAN PERSONALITY QUIZ (TEST MODE)" if test_mode else "           OCEAN PERSONALITY QUIZ")
#     print("="*60)
#     print("Rate each statement from 1-5:")
#     print("1 = Strongly Disagree, 2 = Disagree, 3 = Neutral")
#     print("4 = Agree, 5 = Strongly Agree")
#     print("="*60)

#     scores = {'O': 0, 'C': 0, 'E': 0, 'A': 0, 'N': 0}
#     question_counts = {trait: {'pos': 0, 'neg': 0} for trait in scores}

#     for q_id, q_data in quiz_questions.items():
#         trait = q_id[:3]
#         if trait == 'EXT': trait = 'E'
#         elif trait == 'EST': trait = 'N'
#         elif trait == 'AGR': trait = 'A'
#         elif trait == 'CSN': trait = 'C'
#         elif trait == 'OPN': trait = 'O'

#         if q_data['contribution'] == 1:
#             question_counts[trait]['pos'] += 1
#         else:
#             question_counts[trait]['neg'] += 1

#     question_num = 1
#     for q_id, q_data in quiz_questions.items():
#         print(f"\nQuestion {question_num}/{len(quiz_questions)}:")
#         print(f"'{q_data['question']}'")

#         if test_mode:
#             response = random.randint(1, 5)  # Simulated response
#             print(f"Simulated response: {response}")
#         else:
#             while True:
#                 try:
#                     response = int(input("Your rating (1-5): "))
#                     if 1 <= response <= 5:
#                         break
#                     else:
#                         print("Please enter a number between 1 and 5.")
#                 except ValueError:
#                     print("Please enter a valid number.")

#         trait = q_id[:3]
#         if trait == 'EXT': trait = 'E'
#         elif trait == 'EST': trait = 'N'
#         elif trait == 'AGR': trait = 'A'
#         elif trait == 'CSN': trait = 'C'
#         elif trait == 'OPN': trait = 'O'

#         scores[trait] += response * q_data['contribution']
#         question_num += 1

#     normalized_scores = {
#         trait: normalize_score(scores[trait], question_counts[trait]['pos'], question_counts[trait]['neg'])
#         for trait in scores
#     }

#     print("\n" + "="*60)
#     print("              YOUR PERSONALITY PROFILE")
#     print("="*60)
#     for trait, label in zip(['O', 'C', 'E', 'A', 'N'],
#                             ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism']):
#         print(f"{label:17}: {normalized_scores[trait]:.1f}/10")

#     user_profile = np.array([
#         normalized_scores['O'], normalized_scores['C'],
#         normalized_scores['E'], normalized_scores['A'],
#         normalized_scores['N']
#     ]).reshape(1, -1)

#     min_distance = float('inf')
#     closest_cluster = 0
#     for cluster_id, cluster_data in cluster_profiles.items():
#         cluster_profile = np.array(cluster_data['profile']).reshape(1, -1)
#         distance = euclidean_distances(user_profile, cluster_profile)[0][0]
#         if distance < min_distance:
#             min_distance = distance
#             closest_cluster = cluster_id

#     assigned_cluster = cluster_profiles[closest_cluster]

#     print("\n" + "="*60)
#     print("           YOUR PERSONALITY TYPE")
#     print("="*60)
#     print(f"Cluster: {assigned_cluster['name']}")
#     print(f"Description: {assigned_cluster['description']}")
#     print(f"Cluster Profile (O-C-E-A-N): {assigned_cluster['profile']}")
#     print(f"Your Profile   (O-C-E-A-N): {[round(normalized_scores[t], 1) for t in ['O', 'C', 'E', 'A', 'N']]}")
#     print(f"Distance from cluster center: {min_distance:.2f}")

#     # MBTI Inference
#     mbti_type = infer_mbti(normalized_scores)
#     print("\n" + "="*60)
#     print("                YOUR MBTI TYPE")
#     print("="*60)
#     print(f"MBTI: {mbti_type}")

#     return normalized_scores, closest_cluster, mbti_type


def run_personality_quiz(test_mode=False, silent=False):
    if not silent:
        print("="*60)
        print("           OCEAN PERSONALITY QUIZ (TEST MODE)" if test_mode else "           OCEAN PERSONALITY QUIZ")
        print("="*60)
        print("Rate each statement from 1-5:")
        print("1 = Strongly Disagree, 2 = Disagree, 3 = Neutral")
        print("4 = Agree, 5 = Strongly Agree")
        print("="*60)

    scores = {'O': 0, 'C': 0, 'E': 0, 'A': 0, 'N': 0}
    question_counts = {trait: {'pos': 0, 'neg': 0} for trait in scores}

    for q_id, q_data in quiz_questions.items():
        trait = q_id[:3]
        if trait == 'EXT': trait = 'E'
        elif trait == 'EST': trait = 'N'
        elif trait == 'AGR': trait = 'A'
        elif trait == 'CSN': trait = 'C'
        elif trait == 'OPN': trait = 'O'

        if q_data['contribution'] == 1:
            question_counts[trait]['pos'] += 1
        else:
            question_counts[trait]['neg'] += 1

    question_num = 1
    for q_id, q_data in quiz_questions.items():
        if not silent:
            print(f"\nQuestion {question_num}/{len(quiz_questions)}:")
            print(f"'{q_data['question']}'")

        if test_mode:
            response = random.randint(1, 5)  # Simulated response
            if not silent:
                print(f"Simulated response: {response}")
        else:
            while True:
                try:
                    response = int(input("Your rating (1-5): "))
                    if 1 <= response <= 5:
                        break
                    else:
                        print("Please enter a number between 1 and 5.")
                except ValueError:
                    print("Please enter a valid number.")

        trait = q_id[:3]
        if trait == 'EXT': trait = 'E'
        elif trait == 'EST': trait = 'N'
        elif trait == 'AGR': trait = 'A'
        elif trait == 'CSN': trait = 'C'
        elif trait == 'OPN': trait = 'O'

        scores[trait] += response * q_data['contribution']
        question_num += 1

    normalized_scores = {
        trait: normalize_score(scores[trait], question_counts[trait]['pos'], question_counts[trait]['neg'])
        for trait in scores
    }

    if not silent:
        print("\n" + "="*60)
        print("              YOUR PERSONALITY PROFILE")
        print("="*60)
        for trait, label in zip(['O', 'C', 'E', 'A', 'N'],
                                ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism']):
            print(f"{label:17}: {normalized_scores[trait]:.1f}/10")

    user_profile = np.array([
        normalized_scores['O'], normalized_scores['C'],
        normalized_scores['E'], normalized_scores['A'],
        normalized_scores['N']
    ]).reshape(1, -1)

    min_distance = float('inf')
    closest_cluster = 0
    for cluster_id, cluster_data in cluster_profiles.items():
        cluster_profile = np.array(cluster_data['profile']).reshape(1, -1)
        distance = euclidean_distances(user_profile, cluster_profile)[0][0]
        if distance < min_distance:
            min_distance = distance
            closest_cluster = cluster_id

    assigned_cluster = cluster_profiles[closest_cluster]

    if not silent:
        print("\n" + "="*60)
        print("           YOUR PERSONALITY TYPE")
        print("="*60)
        print(f"Cluster: {assigned_cluster['name']}")
        print(f"Description: {assigned_cluster['description']}")
        print(f"Cluster Profile (O-C-E-A-N): {assigned_cluster['profile']}")
        print(f"Your Profile   (O-C-E-A-N): {[round(normalized_scores[t], 1) for t in ['O', 'C', 'E', 'A', 'N']]}")
        print(f"Distance from cluster center: {min_distance:.2f}")

    # MBTI Inference
    mbti_type = infer_mbti(normalized_scores)
    if not silent:
        print("\n" + "="*60)
        print("                YOUR MBTI TYPE")
        print("="*60)
        print(f"MBTI: {mbti_type}")

    return normalized_scores, closest_cluster, mbti_type


# Run in test mode
normalized_scores, closest_cluster, mbti_type = run_personality_quiz(test_mode=True, silent=True)

