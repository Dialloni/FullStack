from flask import Flask , render_template

app = Flask (__name__)
@app.route('/')

def aboutMe():
    return render_template('flaskA1.html')
if __name__ == '__main__':
    app.run(debug = True, port = 4000)