from django.shortcuts import render
# from django.http import HttpResponse
from django.http.response import HttpResponse

# Create your views here.
articles = {
    'amour': "je t'aime à la folie de l'univers",
    'amourplus': "je t'aime à la folie de l'univers et des univers parallèles",
    'mariage': 'Camille Vangansberg ?'
}


def news_view(request, topic):
    return HttpResponse(articles[topic])
