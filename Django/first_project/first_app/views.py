from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
   return HttpResponse("Hello, world, Django.")

def display_name(request):
   return HttpResponse("Hello, world,Diallo.")