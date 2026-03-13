from flask import Blueprint, request, jsonify

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/contact', methods=['POST'])
def contact():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    subject = data.get("subject")
    message = data.get("message")

    print(name, email, subject, message)

    return jsonify({"message": "Message received successfully"})