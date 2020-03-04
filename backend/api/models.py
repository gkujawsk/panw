from django.db import models

# Create your models here.
class Notatka(models.Model):
    firstName = models.CharField(null=False, blank=False, max_length=128)
    lastName = models.CharField(null=False, blank=False, max_length=128)
    email = models.CharField(null=False, blank=False, max_length=128)