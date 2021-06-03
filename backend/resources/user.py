from flask_restful import Resource
from flask import request

# from werkzeug.security import safe_str_cmp
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    get_jwt_identity,
    jwt_required,
)
import bcrypt
from models.user import UserModel
from schemas.user import UserSchema

# Mensagens pré-definidas
USER_ALREADY_EXISTS = "Um usuário com esse login já existe."
USER_EMAIL_ALREADY_EXISTS = "Um usuário com esse email já existe."
CREATED_SUCCESSFULLY = "Usuário criado com sucesso."
USER_NOT_FOUND = "Usuário não encontrado."
USER_DELETED = "Usuário removido."
INVALID_CREDENTIALS = "Credenciais inválidas."
USER_LOGGED_OUT = "Usuário <id={user_id}> deslogado com sucesso."

user_schema = UserSchema()


class UserRegister(Resource):
    @classmethod
    def post(cls):
        user_json = request.get_json()
        user = user_schema.load(user_json)

        user.password = bcrypt.hashpw(user.password.encode("utf-8"), bcrypt.gensalt())
        user.password = user.password.decode("utf-8", "ignore")

        if UserModel.find_by_username(user.username):
            return {"message": USER_ALREADY_EXISTS}, 400
        if UserModel.find_by_email(user.email):
            return {"message": USER_EMAIL_ALREADY_EXISTS}, 400

        user.save_to_db()

        return {"message": CREATED_SUCCESSFULLY}, 201


class User(Resource):
    @classmethod
    def get(cls, user_id: int):
        user = UserModel.find_by_id(user_id)
        if not user:
            return {"message": USER_NOT_FOUND}, 404

        return user_schema.dump(user), 200

    @classmethod
    def delete(cls, user_id: int):
        user = UserModel.find_by_id(user_id)
        if not user:
            return {"message": USER_NOT_FOUND}, 404

        user.delete_from_db()
        return {"message": USER_DELETED}, 200


class UserLogin(Resource):
    @classmethod
    def post(cls):
        user_json = request.get_json()
        user_data = user_schema.load(user_json)
        user = UserModel.find_by_username(user_data.username)
        password_encoded = user_data.password.encode("utf-8")
        if user:

            valido = bcrypt.checkpw(password_encoded, user.password.encode("utf-8"))
            if valido:
                additional_claims = {"username": user.username, "email": user.email}
                access_token = create_access_token(
                    identity=user.id,
                    additional_claims=additional_claims,
                    fresh=True,
                )
                refresh_token = create_refresh_token(user.id)
                return {
                    "access_token": access_token,
                    "refresh_token": refresh_token,
                }, 200

        return {"message": INVALID_CREDENTIALS}, 401


class UserLogout(Resource):
    @classmethod
    @jwt_required()
    def post(cls):
        # jti = get_jwt()["jti"]  # jti is "JWT ID", a unique identifier for a JWT.
        user_id = get_jwt_identity()
        return {"message": USER_LOGGED_OUT.format(user_id)}, 200


class TokenRefresh(Resource):
    @classmethod
    @jwt_required(refresh=True)
    def post(cls):
        current_user = get_jwt_identity()
        new_token = create_access_token(identity=current_user, fresh=False)
        return {"access_token": new_token}, 200
