from flask import Flask, request, jsonify
import joblib
import cv2
import numpy as np

app = Flask(__name__)

# Load the trained SVM model
model = joblib.load('svm_document_verification_model.pkl')

def preprocess_image(image_file):
    image = cv2.imdecode(np.frombuffer(image_file.read(), np.uint8), cv2.IMREAD_GRAYSCALE)
    resized_image = cv2.resize(image, (128, 128))
    edges = cv2.Canny(resized_image, 100, 200)
    return edges.flatten().reshape(1, -1)

@app.route('/verify-document', methods=['POST'])
def verify_document():
    if 'document' not in request.files:
        return jsonify({"error": "No document uploaded"}), 400

    document = request.files['document']
    processed_image = preprocess_image(document)
    prediction = model.predict(processed_image)
    result = 'real' if prediction[0] == 1 else 'fake'
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
