python /code/manage.py collectstatic --noinput
python /code/manage.py migrate --noinput
gunicorn conf.wsgi:application -c /code/conf/gunicorn.py
