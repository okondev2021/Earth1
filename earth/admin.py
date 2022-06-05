from django.contrib import admin
from .models import User,UserRequest,Create

# Register your models here.
admin.site.register(User)
admin.site.register(UserRequest)
admin.site.register(Create)

