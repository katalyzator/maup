# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-23 16:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_university'),
    ]

    operations = [
        migrations.AddField(
            model_name='university',
            name='active',
            field=models.BooleanField(default=False, verbose_name=b'\xd0\x9f\xd0\xbe\xd1\x81\xd1\x82\xd0\xb0\xd0\xb2\xd1\x8c\xd1\x82\xd0\xb5 \xd0\xb3\xd0\xb0\xd0\xbb\xd0\xbe\xd1\x87\xd0\xba\xd1\x83 \xd0\xb5\xd1\x81\xd0\xbb\xd0\xb8 \xd1\x8d\xd1\x82\xd0\xbe \xd0\xbe\xd0\xb4\xd0\xb8\xd0\xbd \xd0\xb8\xd0\xb7 \xd0\xb3\xd0\xbb\xd0\xb0\xd0\xb2\xd0\xbd\xd1\x8b\xd1\x85 \xd0\xa3\xd0\xbd\xd0\xb8\xd0\xb2\xd0\xb5\xd1\x80\xd1\x81\xd0\xb8\xd1\x82\xd0\xb5\xd1\x82\xd0\xbe\xd0\xb2'),
        ),
    ]