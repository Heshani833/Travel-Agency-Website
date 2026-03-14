from flask import Blueprint, request, jsonify

auth_bp = Blueprint('auth', __name__)

users = []

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json

    user = {
        "email": data["email"],
        "password": data["password"]
    }

    users.append(user)

    return jsonify({"message":"User registered"})

@auth_bp.route('/signin', methods=['POST'])
def signin():
    data = request.json
    for user in users:
        if user["email"] == data["email"] and user["password"] == data["password"]:
            return jsonify({"message": "Login Successfully"})
    return jsonify({"message": "Invalid credentials"}),401