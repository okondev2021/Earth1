from django.urls import path
from . import views    

urlpatterns = [
    path('',views.index,name='index'),
    path('Login',views.login_view,name='login'),
    path('Register',views.register,name='register'),
    path('Logout',views.logout_view,name='logout'),
    path('E-commerce',views.commerce,name='commerce'),
    path('Payment-Earth-commerce/<int:paymentid>',views.payment,name='payment'),
    path('Item/<int:itemid>',views.product,name='product'),
    path('PurchaseItem/<int:purchaseid>',views.purchase,name='purchase'),
    path('Create-Item/<int:benefactor_id>',views.donate_material,name='donate_material'),
    path('UserProfile/<str:name>',views.profile,name='profile'),
    path('AuthRequest/<int:id>',views.authrequest,name='authrequest'),
    path('RequestPage/<int:rid>',views.requestpage,name='requestpage'),
    # 404 page url
    path('404',views.not_found,name='not_found'),
    # api route
    path('Receiver/<str:receivername>',views.receiver,name='receiver'),
    
]
