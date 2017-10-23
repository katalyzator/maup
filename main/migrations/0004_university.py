# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-23 15:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_slider'),
    ]

    operations = [
        migrations.CreateModel(
            name='University',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=1000, verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xa3\xd0\xbd\xd0\xb8\xd0\xb2\xd0\xb5\xd1\x80\xd1\x81\xd0\xb8\xd1\x82\xd0\xb5\xd1\x82\xd0\xb0')),
                ('image', models.ImageField(upload_to=b'images/universities', verbose_name=b'\xd0\x9a\xd0\xb0\xd1\x80\xd1\x82\xd0\xb8\xd0\xbd\xd0\xba\xd0\xb0')),
                ('link', models.URLField(blank=True, null=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': '\u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442',
                'verbose_name_plural': '\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u044b',
            },
        ),
    ]
