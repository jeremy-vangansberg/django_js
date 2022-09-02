from django.db import models

# Create your models here.
class Car(models.Model):
    # pk autoincrement
    brand = models.CharField(max_length=301)
    year = models.IntegerField()

    def __str__(self) -> str:
        return f"Car is {self.brand} {self.year}"   