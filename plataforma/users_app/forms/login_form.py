from django import forms


class LoginForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(max_length=100)
    hcaptcha = forms.CharField(max_length=10000)
    ip_address = forms.CharField(max_length=10000)
