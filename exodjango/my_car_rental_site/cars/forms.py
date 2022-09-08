# from django import forms
from django import forms
from .models import ReviewModel



# class ReviewForm(forms.Form):
#     first_name = forms.CharField(label="First Name", max_length=100)
#     last_name = forms.CharField(label='Last Name', max_length=100)
#     email = forms.EmailField(label='Email')
#     review = forms.CharField(label='write your review',widget=forms.Textarea(attrs= {'class': 'myform'}))   
    

class ReviewForm(forms.ModelForm):
    
    class Meta:
        model = ReviewModel
        fields = ['first_name', 'last_name', 'stars']

