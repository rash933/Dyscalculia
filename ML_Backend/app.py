from flask import Flask, request, jsonify
from flask_cors import CORS
import service as serve


app = Flask(__name__)
app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def hello_world():  # put application's code here
    return 'Discalculia SERVER'


@app.route('/probability', methods=['POST'])
def probability():
    if request.method == 'POST':
        return jsonify({"success": "probability checked",
                        "data": serve.check_probability(request.form['questionaire_parent'],
                                                        request.form['iq_test'],
                                                        request.form['questionaire_child'])})


@app.route('/progress', methods=['POST'])
def progress():
    if request.method == 'POST':
        return jsonify({"success": "progress checked",
                        "data": serve.check_progress(request.form['stage_id'],
                                                     request.form['class_performance'],
                                                     request.form['class_test_marks'],
                                                     request.form['assignment_marks'],
                                                     request.form['student_class_attendance'])})


if __name__ == '__main__':
    app.run(host="0.0.0.0")
