from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home.html')
def home():
    return render_template('home.html', config=True)

@app.route('/gallery.html')
def gallery():
    return render_template('gallery.html', config=True)

@app.route('/contacts.html')
def contacts():
    return render_template('contacts.html', config=True)

@app.route('/tree.html')
def tree():
    return render_template('tree.html', config=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000 , debug=True)

