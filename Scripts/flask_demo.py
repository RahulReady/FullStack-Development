# Flask demo

# import flask and SQLAlchemy
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Instantiate flask app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://rahul@localhost:5432/example'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


# Creating a person class with db.model
class Person(db.Model):
    #__tablename__ = 'persons'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
#Person.__table__.drop(db)
    # Helps with debugging as you can see the attributes of the query results
    # Repr: returns printable representation of an object
    def __repr__(self):
        return f'<Person ID: {self.id}, Person Name: {self.name}>'

# Creates tables if not already created
db.create_all()

@app.route('/')
def index():
    # Query first record from person table
    person = Person.query.first()
    # Call the name attribute from Person class
    return 'Hello ' + person.name


# Running the flask app
# in the terminal cd into your current directory.
# run the following: FLASK_APP=<name-of-app> flask run

# If the following code is defined, can simply run the app
if __name__ == '__main__':
  app.run(debug = True)
