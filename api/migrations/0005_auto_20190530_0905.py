# Generated by Django 2.2.1 on 2019-05-30 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20190530_0904'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assignment',
            name='completed',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='assignment',
            name='is_assigned',
            field=models.BooleanField(default=False),
        ),
    ]
