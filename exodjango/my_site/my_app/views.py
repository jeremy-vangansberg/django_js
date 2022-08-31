from django.shortcuts import render

# Create your views here.
def example_view(request):
    # my_app/templates/my_app
    return render(request, 'my_app/example.html')


def variable_view(request):

    my_var = {'first_name':'Rosaline', 'last_name':'Franklin',
     'some_list': [1,2,3,4,5,6], 'some_dict':{'my_key': 'my_value'}}

    return render(request, 'my_app/variables.html', context=my_var)