from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')  # This route serves the homepage
def home():
    return render_template('quiz.html')  # Ensure the file name matches your HTML file in the 'templates' folder

if __name__ == '__main__':
    app.run(debug=True)

