# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-30 16:28
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_eventimage_newsimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventimage',
            name='event',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_image', to='main.Conference', verbose_name=b'choose Event'),
        ),
    ]
