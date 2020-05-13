# FullStackDevelopment Notesheet


## Database commands:
Installation: `$ brew install postgres` <br>
Start Postgres server:```$ pg_ctl -D /usr/local/var/postgres start ```<br>
Stop Postgres server:```$ pg_ctl -D /usr/local/var/postgres stop ```

### Initial installation settings for Postgres:
The initial installation will:

* create an initial database named ```postgres```
* create an initial user named ```postgres```. Your ```postgres``` user will have no password set by default.
* create initial databases called ```template1``` and ```template0```. Any other database created after ```template1``` is a clone of ```template1```, including its tables and rows. If you add rows (objects) to ```template1```, they will be copied onto future created databases. ```template0```, on the other hand, should stay "pure" and never be changed.
* The default host machine that runs your postgres server, on your machine, is localhost ``(aka, 127.0.0.1)``
* The default port traditionally used to host your server is port ``5432``. There are very few reasons to use a different port than `5432`.<br>

**Default settings**:
Host:	localhost,
Port:	5432,
Username:	postgres,
Password:	(left blank)

### Postgres CLI tools:
**Log in** as a particular user: `sudo -u <username> -i`<br>
**Create** a new database: `createdb <database_name>`<br>
**Destroy** a database: `dropdb <database_name>`<br>
**Reset** a database: `dropdb <database_name> && createdb <database_name>`<br>
**Interact** with database: `psql <database_name>`<br>
**List** databses and owners: `\l`<br>
**Quit** psql: `\q`<br>
**View database tables**: `\dt`<br>
**View schema of table**: `\d <table>`<br>
**Connect to another db**: `\c <database_name>`<br>


## SQLAlchemy:
* SQLAlchemy is the most popular open-source library for working with relational databases from Python.
* It is one type of ORM library, AKA an Object-Relational Mapping library, which provides an interface for using object oriented programming to interact with a database.

### Benefits
* Can work entirely in python (don't need to write raw SQL queries).
* Can use SQLite for development and can switch to Postgres for production

#### SQL Connection pool
* Handles dropped connections
* Avoids doing many small calls to DB
* Avoids opening and closing connections for every data change

#### Engine
* Low level layer for interacting with database.
* Similar to psychopg2 where you manage a connection directly

#### SQLAlchemy ORM
* Highest layer of absraction in SQLAlchemy
* Wraps the SQL Expressions and Engine to work together to interact with the database

![AbstractionLayers](Images/SQLAlchemyAbstractionLayers.png)

#### Flask commands

**Live reload** Method 1:  `FLASK_APP=app.py FLASK_DEBUG=true flask run`<br>
**Alt. running app** with debug mode on so that you can refresh the localhost page instead of running the .py program again: `if __name__ == '__main__':
app.run(debug = True)`

**Connecting to database with SQLAlchemy**
![Database Connection](Images/DataBaseConnection.png)

#### Code
`db = SQLAlchemy(app)` where db is an instance of the database <br>
`db.Model`: Ability to create and manipulate data models <br>
`db.session` Ability to create and manipulate database transactions <br>
`db.create_all()` Detects models and creates tables for them (if they don't exist) <br>
Interactive commands you can enter to query data from db <br>
`from flask_hello_app import Person, db`<br>
`Person.query.all()`<br>
`Person.query.first()`<br>
`query = Person.query.filter(Person.name == 'Rahul')`<br>
`query.first()`<br>
`query.all()`<br>
Can use `db.session` to insert records into a table <br>
`db.session.add()` : adds record into db <br>
`db.session.commit()` : commits those changes in add into the db <br>

**Postgres datatype definition**
![Datatypes](Images/PostgresDataTypes.png)

**Constraints**: Done to ensure data integrity and consistency
![ConstraintsEx](Images/ConstraintsEx.png)
