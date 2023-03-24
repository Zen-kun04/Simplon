from flask import Flask, request, Response
from flask_cors import CORS
import sqlite3
import json

app = Flask(__name__)
CORS(app, resources={
    r"/api/*": {
        "origins": "*"
    }
})

def setup():
    db = sqlite3.connect("UserData.db")
    cur = db.cursor()
    cur.execute("""CREATE TABLE IF NOT EXISTS UserData (
        username TEXT, 
        total_points INTEGER, 
        total_questions INTEGER,
        total_good_questions INTEGER,
        total_bad_questions INTEGER,
        total_rounds INTEGER,
        middle_points INTEGER,
        best_score INTEGER
        );""")
    db.commit()

def good_request(req: Flask.request_class):
    try:
        data = json.loads(req.data)
        return (
            ("username" in data
            and "total_points" in data
            and "total_questions" in data
            and "total_good_questions" in data
            and "total_bad_questions" in data
            and "total_rounds" in data
            and "middle_points" in data
            and "best_score" in data
            and len(data) == 8)
            and (
            type(data["username"]) == str
            and type(data["total_points"]) == int
            and type(data["total_questions"]) == int
            and type(data["total_good_questions"]) == int
            and type(data["total_bad_questions"]) == int
            and type(data["total_rounds"]) == int
            and type(data["middle_points"]) == int
            and type(data["best_score"]) == int
            )
        )
    except:
        return False


@app.route('/api/create-user-data', methods=["GET", "POST"])
def create_user_data():
    if good_request(request):
        db = sqlite3.connect("UserData.db")
        cur = db.cursor()
        data = json.loads(request.data)
        if user_exist(data["username"]):
            return "Username already exists", 400
        cur.execute("INSERT INTO UserData (username, total_points, total_questions, total_good_questions, total_bad_questions, total_rounds, middle_points, best_score) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
                    (data["username"],
                     data["total_points"],
                     data["total_questions"],
                     data["total_good_questions"],
                     data["total_bad_questions"],
                     data["total_rounds"],
                     data["middle_points"],
                     data["best_score"]))
        db.commit()
        return 'Success', 200
    return 'Invalid request', 400

def user_exist(user: str):
    db = sqlite3.connect("UserData.db")
    cur = db.cursor()
    data = cur.execute("SELECT username FROM UserData WHERE username = ?", (user,)).fetchone()
    return (data != None) and any(data)

@app.route('/api/increment/<user>/<option>/<amount>')
def increment(user = None, option = None, amount = None):
    if user is None or option is None or amount is None:
        return 'Please submit a user, option and amount', 400
    if not user_exist(user):
        return 'Unknown username', 400
    
    if option not in ("total_points", "total_questions", "total_good_questions", "total_bad_questions", "total_rounds", "middle_points", "best_score"):
        return 'Invalid option', 400
    
    if not str(amount).isdigit():
        return 'Invalid amount type, need to be a valid integer!', 400

    db = sqlite3.connect("UserData.db")
    cur = db.cursor()
    amount = int(amount)
    current_data = int(cur.execute("SELECT {} FROM UserData WHERE username = ?".format(option), (user,)).fetchone()[0])
    cur.execute("UPDATE UserData SET {} = ? WHERE username = ?".format(option), (current_data + amount, user))
    db.commit()
    return 'Success', 200
    
@app.route('/api/setval/<user>/<option>/<amount>')
def set_value(user = None, option = None, amount = None):
    if user is None or option is None or amount is None:
        return 'Please submit a user, option and amount', 400
    if not user_exist(user):
        return 'Unknown username', 400
    
    if option not in ("total_points", "total_questions", "total_good_questions", "total_bad_questions", "total_rounds", "middle_points", "best_score"):
        return 'Invalid option', 400
    
    if not str(amount).isdigit():
        return 'Invalid amount type, need to be a valid integer!', 400

    db = sqlite3.connect("UserData.db")
    cur = db.cursor()
    amount = int(amount)
    cur.execute("UPDATE UserData SET ? = ? WHERE username = ?", (option, amount, user))
    db.commit()
    return 'Success', 200

@app.route('/api/get/<user>/<option>')
def getter(user = None, option = None):
    if user is None or option is None:
        return 'Please submit a user and option', 400
    if not user_exist(user):
        return 'Unknown username', 400

    if option not in ("all", "total_points", "total_questions", "total_good_questions", "total_bad_questions", "total_rounds", "middle_points", "best_score"):
        return 'Invalid option', 400

    db = sqlite3.connect("UserData.db")
    cur = db.cursor()
    if option != "all":
        user_data = cur.execute("SELECT {} FROM UserData WHERE username = ?".format(option), (user,)).fetchone()
    else:
        user_data = cur.execute("SELECT * FROM UserData WHERE username = ?", (user,)).fetchone()
    return (json.dumps(user_data), 200) if any(user_data) else ("Invalid username", 400)



if __name__ == "__main__":
    setup()
    app.run()