import psycopg2

# Creating connection to database
connection = psycopg2.connect('dbname=example')

# Interface to allow you to queue up work to do transactions
cursor = connection.cursor()

# Can do multiple commands before committing

# Delete table 2 if exists in db
cursor.execute('DROP TABLE IF EXISTS table2;')
# Create table 2 if doesn't exist
cursor.execute('''
    CREATE TABLE table2(
    id INTEGER PRIMARY KEY,
    completed BOOLEAN NOT NULL DEFAULT FALSE
    );

 ''')
# Insert into table
# cursor.execute('INSERT INTO table2 (id, completed) VALUES( %(id)s, %(completed)s );',{
#     id:'2',
#     completed:'False'})
SQL = 'INSERT INTO table2 (id, completed) VALUES (%(id)s, %(completed)s);'

data = {
  'id': 3,
  'completed': False
}
cursor.execute(SQL, data)

# Prints results
cursor.execute('SELECT * FROM table2')
result = cursor.fetchall()
print(result)

connection.commit()

# Have to close connection and cursor manually everytime
connection.close()
cursor.close()
