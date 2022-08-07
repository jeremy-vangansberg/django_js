from django.http import Http404, HttpResponseNotFound, HttpResponseRedirect
from django.shortcuts import render
# from django.http import HttpResponse
from django.http.response import HttpResponse
from django.urls import reverse

# Create your views here.
articles = {
    'amour': "je t'aime à la folie de l'univers",
    'amourplus': "je t'aime à la folie de l'univers et des univers parallèles",
    'mariage': 'Camille Vangansberg ?'
}

def news_view(request, topic):
    try :
        result = articles[topic]
        return HttpResponse(result)
    except :
        # result = 'The topic doesnt exist'
        # return HttpResponseNotFound(result)
        raise Http404('GENERIC ERROR') # 404.html

# def add_view(request, num1, num2):
#     result = num1 + num2
#     return HttpResponse(str(result))

def num_page_view(request,num_page):
    topics_list = list(articles.keys())
    topic = topics_list[num_page]
    print(topic)
    return HttpResponseRedirect(reverse('topic-page', args=[topic]))
