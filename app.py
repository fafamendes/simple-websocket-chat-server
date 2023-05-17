from flask_socketio import emit
from flask import render_template

from src.server.instance import server
from src.controllers.chat import Chat

app, api, socketio = server.app, server.api, server.socketio


@socketio.on('connect')
def connected():
    print('Conectou')


@socketio.on('message')
def handle_message(data):

    emit('message', {'message': data}, broadcast=True, include_self=False)


api.add_resource(Chat, '/chat')

if __name__ == '__main__':
    server.run()
