# Diamond Shop

Diamond Shop is example React + Django app, using PostgreSQL database. Additional packages: Redux, Redux-Saga, Reselect, React D&D, React hooks, Docker, Webpack, Babel, DRF, nginx.

## Installation

Here are some settings for local installation of diamond shop.

Open django settings, set DEBUG config to False, and change database host to localhost.

```python
DEBUG = False

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        ...
        'HOST': 'localhost',
        'PORT': '',
    }
}

```

Export database port in docker-compose.yml file.


``` 
 db:
    image: postgres:9.5
    ...
    ports:
      - 5432:5432/tcp

```

Run database from docker-compose file.


```bash
docker-compose up -d db

```
Install requirements to your virtualenv.


```bash
pip install -r requirements.txt

```
Now you can run the backend.


```bash
python manage.py runserver

```

Go to frontend/src/configuration directory, and create config.js file with local settings.

```
export const API_URL = 'http://localhost:8000/';
``` 

Install node modules and run frontend.

```
npm i
npm start
``` 
Everything works!

## Usage

Open django settings, here you can add your admin user.

```python
ADMIN_ACCOUNT = {
    'username': 'admin',
    'email': 'youremail@test.com',
    'password': 'your_password'
}

```
Your database is empty. Run this command, to run migrations, create default diamonds and your admin user.

```bash
python manage.py init_db

```
When your cart contains new changes, you can send notification to your admin email address.
```
python manage.py cart_changes
```
You can also clear cart after logging to django admin, and select this action on the Cart model view. You can also add new diamond shapes here.

## DEMO
Example is available [here](http://shop.grz.lucki.com)
