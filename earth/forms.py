from .django import forms
from .models import *

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = '__all__'

class UserRequestForm(forms.ModelForm):
    class Meta:
        model = UserRequest
        fields = '__all__'

class AuctionForm(forms.ModelForm):
    class Meta:
        model = Create
        fields = '__all__'


