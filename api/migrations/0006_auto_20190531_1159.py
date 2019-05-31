# Generated by Django 2.2.1 on 2019-05-31 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20190530_0905'),
    ]

    operations = [
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.RemoveField(
            model_name='assignment',
            name='completed',
        ),
        migrations.RemoveField(
            model_name='assignment',
            name='is_assigned',
        ),
        migrations.RemoveField(
            model_name='assignment',
            name='updated_at',
        ),
        migrations.RemoveField(
            model_name='candidate',
            name='skills',
        ),
        migrations.AddField(
            model_name='assignment',
            name='skills',
            field=models.ManyToManyField(blank=True, null=True, to='api.Skill'),
        ),
        migrations.AddField(
            model_name='candidate',
            name='skills',
            field=models.ManyToManyField(blank=True, null=True, to='api.Skill'),
        ),
    ]