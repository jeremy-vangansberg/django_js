from django.http import Http404, HttpResponseNotFound, HttpResponseRedirect
from django.shortcuts import render
# from django.http import HttpResponse
from django.http.response import HttpResponse
from django.urls import reverse

def simple_view(request) :
    return render(request, 'my_app/example.html')
