# Initial program running steps
# export FLASK_APP=flaskr
# export FLASK_ENV=development
# flask run
# where flaskr is name of directory


from flask import Flask, jsonify
from models import setup_db, Plant
from flask_cors import CORS

def create_app(test_config = None):
    # Create and configure app
    app = Flask(__name__)
    setup_db(app)
    CORS(app)

    @app.after_request()
    def after_request(response):
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
        return response

    
    return app
