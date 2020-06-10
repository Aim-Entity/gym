from django.shortcuts import render
from .forms import ContactForm
from .models import Package, Mentor
from django.core.mail import send_mail
from django.conf import settings


def index(request):
    if request.method == "POST":
        contact = ContactForm(request.POST)
        if contact.is_valid():
            contact.save()

            name = contact.cleaned_data.get("name")
            message = contact.cleaned_data.get("message")
            email = contact.cleaned_data.get("email")
            send_mail(
                f"Contact Form: {name}",
                f"Message: \n{message}\nEmail: \n{email}",
                settings.EMAIL_HOST_USER,
                ["bilaluddin474@gmail.com"],
                fail_silently=False
            )

    contact = ContactForm()
    packages = Package.objects.all()
    mentors = Mentor.objects.all()

    context = {
        "contact": contact,
        "packages": packages,
        "mentors": mentors,
    }
    return render(request, "index/home.htm", context)
