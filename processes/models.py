from django.db import models
from django.utils.timezone import now
from django.contrib.postgres.fields import JSONField


class Process(models.Model):
    mac_address = models.CharField(max_length=20)
    process_list = JSONField()
    date_created = models.DateTimeField(default=now)
