# Generated by Django 3.2.5 on 2022-09-02 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='brand',
            field=models.CharField(default='test', max_length=30),
            preserve_default=False,
        ),
    ]
