from django.db import models
from django.utils.timezone import now
from django.contrib.postgres.fields import JSONField


class Process(models.Model):
    date_created = models.DateTimeField(default=now)
    mac_address = models.CharField(max_length=20)
    chunk_id = models.CharField(max_length=20)
    pid = models.CharField(max_length=20)
    ppid = models.CharField(max_length=20,default=0)
    name = models.CharField(max_length=200)
    isValid = models.BooleanField(default=True)
