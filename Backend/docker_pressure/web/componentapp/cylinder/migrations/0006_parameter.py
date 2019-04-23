# Generated by Django 2.1.1 on 2018-10-02 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cylinder', '0005_delete_parameter'),
    ]

    operations = [
        migrations.CreateModel(
            name='Parameter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('strength', models.FloatField(default=1)),
            ],
        ),
    ]