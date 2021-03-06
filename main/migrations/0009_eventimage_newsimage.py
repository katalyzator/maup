# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-30 16:20
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_conference_mode'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255, null=True, verbose_name=b'Title of image')),
                ('image', models.ImageField(upload_to=b'images/event', verbose_name=b'Image any size')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_image', to='main.News', verbose_name=b'choose Event')),
            ],
            options={
                'verbose_name': '\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0443',
                'verbose_name_plural': '\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439',
            },
        ),
        migrations.CreateModel(
            name='NewsImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255, null=True, verbose_name=b'Title of image')),
                ('image', models.ImageField(upload_to=b'images/news', verbose_name=b'Image any size')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('news', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='news_image', to='main.News', verbose_name=b'choose News')),
            ],
            options={
                'verbose_name': '\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0443',
                'verbose_name_plural': '\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439',
            },
        ),
    ]
