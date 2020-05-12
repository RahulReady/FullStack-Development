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
Host	localhost,
Port:	5432,
Username	postgres,
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
