from django import forms
from .models import Contact


class ContactForm(forms.ModelForm):
    name = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'name forms'}))

    email = forms.CharField(widget=forms.EmailInput
                            (attrs={'class': 'email forms'
                                    }))

    message = forms.CharField(widget=forms.Textarea
                              (attrs={'class': 'message forms'

                                      }))

    class Meta:
        model = Contact
        fields = ("name", "email", "message")
