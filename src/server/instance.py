from flask import Flask
from flask_restful import Api
from flask_socketio import SocketIO

app = Flask(__name__,
            template_folder='../view/templates',
            static_folder='../view/static',
            static_url_path='/static'
            )

socketio = SocketIO(app, cors_allowed_origins="*")


class Server():
    def __init__(self):
        self.app = app
        self.api = Api(app)
        self.socketio = socketio

    def run(self):
        self.socketio.run(app, host='0.0.0.0', port=5000, debug=True)


server = Server()
