from re import L
from django.shortcuts import render

# Create your views here.
def rental_review_view(request):
    return render(request, 'cars/rental_review.html')


def thank_you_view(request):
    return render(request, 'cars/thank_you.html')
