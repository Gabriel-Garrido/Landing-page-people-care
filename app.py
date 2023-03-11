from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, User

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
with app.app_context():
    db.create_all()

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = User(name=data['nombre'], email=data['email'], phone=data['telefono'],)
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize())

if __name__ == '__main__':
    app.run(debug=True)