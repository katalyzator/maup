# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-30 16:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_auto_20171030_2228'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255, null=True, verbose_name=b'Title of image')),
                ('image', models.ImageField(upload_to=b'images/gallery', verbose_name=b'Image any size')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': '\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0443',
                'verbose_name_plural': '\u0413\u0430\u043b\u0435\u0440\u0435\u044f',
            },
        ),
    ]