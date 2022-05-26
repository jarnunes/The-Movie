from django.urls import path
from . import views

app_name = 'movie'

urlpatterns = [
    path('', views.popular, name='index'),
    path('popular/', views.popular, name='popular'),
    path('search/', views.search, name='search')
]
