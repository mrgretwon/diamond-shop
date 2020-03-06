from django.contrib.postgres.fields import JSONField
from django.core.files.storage import FileSystemStorage
from django.db import models


class Diamond(models.Model):
    type = models.CharField(max_length=250)
    shape = models.FileField(storage=FileSystemStorage('/code/media'), upload_to='shapes/')

    def __str__(self):
        return self.type


class Cart(models.Model):
    data = JSONField(default=[])
    updated = models.BooleanField(default=False)
