from flask import render_template, Response
from flask_restful import Resource

class Chat(Resource):
    def get(self):
        return Response(render_template('index.html'))