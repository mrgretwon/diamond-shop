# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2020-03-05 10:40
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', django.contrib.postgres.fields.jsonb.JSONField(default=[])),
                ('updated', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Diamond',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=250)),
                ('shape', models.FileField(upload_to='shapes/')),
            ],
        ),
    ]
