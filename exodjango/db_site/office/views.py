from django.shortcuts import render
from . import models

# Create your views here.
def views_patient(request):

    all_patients = models.Patient.objects.all()
    context_list = {'patients' : all_patients} # have to be a dict

    return render(request, 'office/list.html', context=context_list)