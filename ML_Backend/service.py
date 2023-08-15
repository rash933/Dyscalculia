import pickle

with open('weights/svm_model.pkl', 'rb') as file:
    svm = pickle.load(file)

# Load the model from the pickle file
with open('weights/random.pkl', 'rb') as file:
    random = pickle.load(file)


def check_progress(value1,value2,value3,value4,value5):
    prediction = random.predict([[value1, value2, value3, value4, value5]])
    prediction_mapping = {
        0: 'Low',
        1: 'Low Medium',
        2: 'High Medium',
        3: 'High',
    }
    return prediction_mapping.get(prediction[0], 'Unknown')


def check_probability(value1, value2, value3):
    prediction = svm.predict([[value1, value2, value3]])
    if prediction == 1:
        return 'High Probability'
    else:
        return 'Low Probability'
