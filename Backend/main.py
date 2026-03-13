from flask import Flask
from flask_cors import CORS 

from routes.contact_routes import contact_bp
from routes.auth_routes import auth_bp

app = Flask(__name__)
CORS(app)

#register routes
app.register_blueprint(contact_bp)
app.register_blueprint(auth_bp)

@app.route("/")
def home():
    return {"message":"Travel Agency Backend Running"}

if __name__ == "__main__":
    app.run(debug=True)
