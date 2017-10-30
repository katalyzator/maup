# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-24 03:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_conference_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='conference',
            name='mode',
            field=models.CharField(choices=[(b'conference', b'Konferens'), (b'kongre', b'Kongre')], default=1, max_length=20, verbose_name=b'\xd0\x92\xd1\x8b\xd0\xb1\xd0\xb5\xd1\x80\xd0\xb8\xd1\x82\xd0\xb5 \xd1\x82\xd0\xb8\xd0\xbf'),
            preserve_default=False,
        ),
    ]