FROM python:3.6-alpine

RUN apk add --no-cache postgresql-libs musl-dev postgresql-dev bash gcc make python3-dev linux-headers && \
    apk del --purge

# Python Requirements
ADD requirements.txt /code/requirements.txt
RUN pip install -r /code/requirements.txt

RUN mkdir /code/logs/ && mkdir /code/static/ && mkdir /code/media/

# source code
ADD . /code

WORKDIR /code/

ENV PYTHONPATH="/code"

CMD ["/bin/bash", "-c", "/code/run-backend.sh >>/code/logs/gunicorn.log 2>&1"]
