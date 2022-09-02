from django.urls import path
from . import views


# domain.com/office --> 
urlpatterns = [
    path('', views.views_patient, name='list_patients')
]
