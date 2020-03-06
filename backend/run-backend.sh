python /code/manage.py collectstatic --noinput
python /code/manage.py init_db
#gunicorn conf.wsgi:application -c /code/conf/gunicorn.py
python /code/manage.py runserver 0.0.0.0:8000
