# Generated by Django 2.1.2 on 2019-02-05 11:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reporter', '0003_auto_20190205_1025'),
    ]

    operations = [
        migrations.RenameField(
            model_name='report',
            old_name='model',
            new_name='author',
        ),
    ]
