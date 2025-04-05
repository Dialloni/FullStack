from flask import Flask, redirect, render_template, request, session

app = Flask(__name__)
app.secret_key = "my_secret"

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        session["fname"] = request.form["fname"]
        session["lname"] = request.form["lname"]
        session["email"] = request.form["email"]
        session["state"] = request.form["state"]
        session["city"] = request.form["city"]
        session["zipcode"] = request.form["zipcode"]

        return redirect("/display")

    return render_template("index.html")

@app.route("/display")
def display():
    return render_template(
        "display.html",
        fname=session.get("fname"),
        lname=session.get("lname"),
        email=session.get("email"),
        state=session.get("state"),
        city=session.get("city"),
        zipcode=session.get("zipcode")
    )

@app.route("/clear")
def clear():
    session.clear()
    return redirect("/")

if __name__ == '__main__':
    app.run(debug=True)