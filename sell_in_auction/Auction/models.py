from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class AuctionItems(models.Model):
    name = models.CharField(max_length=50)
    picture = models.ImageField(upload_to='pictures/', max_length=100)
    current_bid = models.DecimalField(max_digits=7, decimal_places=2)
    date_posted = models.DateTimeField(auto_now_add=True)
    bid_time = models.TimeField(blank=True, null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    winner = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name
    
