# Generated by Django 2.1.2 on 2019-02-04 10:46

from django.db import migrations, models
import django.db.models.deletion
import reporter.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CylinderState',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('D', models.FloatField(default=0.0)),
                ('C_A', models.FloatField(default=0.0)),
                ('P', models.FloatField(default=0.0)),
                ('R', models.FloatField(default=0.0)),
                ('S', models.FloatField(default=0.0)),
                ('E', models.FloatField(default=0.0)),
                ('t', models.FloatField(default=0.0)),
            ],
        ),
        migrations.CreateModel(
            name='NozzleState',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('report_type', models.CharField(max_length=50)),
                ('location', models.FileField(upload_to=reporter.models.report_path)),
            ],
        ),
        migrations.AddField(
            model_name='cylinderstate',
            name='report',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='reporter.Report'),
        ),
    ]
