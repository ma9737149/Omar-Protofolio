from flask import Flask , render_template , redirect


app = Flask(__name__)


@app.route('/')
def home_page():
    return render_template('home.html' , css_file = 'home.css' , has_emojis = True , name = 'Home')


@app.route('/about')
def about_page():
    return render_template('about.html' , css_file = 'about.css' , has_emojis = True , name = 'About')

@app.route("/works")
def works_page():
    return render_template("works.html" , css_file = 'works.css' , has_emojis = True , name = 'Works')


@app.errorhandler(404)
def error_page(e):
    return redirect("https://www.google.com/T$T")

if __name__ == "__main__":
    app.run()

