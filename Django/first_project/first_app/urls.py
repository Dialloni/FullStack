from django.urls import path


from . import views

urlpatterns = [
    path(r'' , views.index),
    path(r'display_name', views.display_name)
]


#localhost:8000/