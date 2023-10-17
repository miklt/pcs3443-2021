from flask import Flask, jsonify
from flask_restful import Api
from flask_jwt_extended import JWTManager
from marshmallow import ValidationError
from flask_cors import CORS
import os
from db import db
from schema import ma
from dotenv import load_dotenv
from resources.user import (
    UserRegister,
    UserLogin,
    User,
    UserLogout,
    ServerStatus,
    UserDelete,
)

app = Flask(__name__)
load_dotenv()
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data.db"
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ["SQLALCHEMY_DATABASE_URI"]
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["PROPAGATE_EXCEPTIONS"] = True

# app.secret_key = "michelet"
# could do app.config['JWT_SECRET_KEY'] if we prefer
app.secret_key = os.environ["JWT_SECRET_KEY"]
CORS(app)
api = Api(app)


@app.before_first_request
def create_tables():
    db.create_all()


@app.errorhandler(ValidationError)
def handle_marshmallow_validation(err):
    return jsonify(err.messages), 400


jwt = JWTManager(app)

# Endpoints da aplicação
api.add_resource(UserRegister, "/register")
api.add_resource(User, "/user/<int:user_id>")
api.add_resource(UserLogin, "/login")
api.add_resource(UserLogout, "/logout")
api.add_resource(ServerStatus, "/status")
api.add_resource(UserDelete, "/remove/<user_name>")

if __name__ == "__main__":
    db.init_app(app)
    ma.init_app(app)
    app.run(host="0.0.0.0", port=5000, debug=True)
