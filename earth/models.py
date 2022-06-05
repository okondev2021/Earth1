from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    DOB = models.CharField(max_length = 100, default = 'admin')
    UserType = models.CharField(max_length = 100, default = 'admin')
    Gender = models.CharField(max_length = 100,default = 'admin')
    Address = models.CharField(max_length = 900, default = 'admin')
    Country = models.CharField(max_length = 100, default = 'admin')
    ProfilePicture = models.ImageField(upload_to='images/',null=True)

class Create(models.Model):
    Title = models.CharField(max_length=100)
    Description =  models.CharField(max_length=1000)
    ItemImage =  models.ImageField(upload_to='images/',null=True)
    Owner = models.ForeignKey('User', limit_choices_to={'UserType':'Donator'},on_delete=models.CASCADE,related_name="users_item")
    Amount = models.IntegerField(default = 0)
    Benefactor = models.ForeignKey('User',limit_choices_to={'UserType':'Receiver'},on_delete=models.CASCADE,related_name='benefator',null=True)
    def __str__(self):
        return f"{self.Title}" 


class UserRequest(models.Model):
    Username =models.ForeignKey('User',limit_choices_to={'UserType':'Receiver'},on_delete=models.CASCADE,related_name="users_request")
    ProofPic1 = models.ImageField(upload_to='images/',null=True)
    ProofPic2 = models.ImageField(upload_to='images/',null=True)
    RequestStatus = models.BooleanField(default = False)
    About =  models.CharField(max_length = 3000)
    Donation = models.IntegerField(default = 0)

    def __str__(self):
        return f"{self.id} {self.Username} made a request"

    
