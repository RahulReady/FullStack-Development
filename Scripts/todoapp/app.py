# Imports
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
#Initialize flask app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://rahul@localhost:5432/todoapp'
db = SQLAlchemy(app)

class Todo(db.Model):
    __tablename__ = 'todos'
    id = db.Column(db.Integer, primary_key = True)
    description = db.Column(db.String(), nullable = False)

    # Converting the db object into something useful to see
    def __repr__():
        return f'<Todo: {self.id} {self.description}>'

# Create tables if not already done so
db.create_all()

@app.route('/')
def index():
    # Data can be passed in to the render_template
    return render_template('index.html', data = Todo.query.all() )

@app.route('/todos/create', methods=['POST'])
def create_todo():
  description = request.form.get('description', '')
  todo = Todo(description=description)
  # Add the change and commit the change
  db.session.add(todo)
  db.session.commit()
  return redirect(url_for('index'))

## Restarting a corrupt db
# dropdb todoapp && createdb todoapp
# Running main method
if __name__ == '__main__':
    app.run(debug = True)
