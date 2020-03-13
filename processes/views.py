from django.http import JsonResponse
from django.shortcuts import render


# Create your views here.
def get_all_processes(request):
    return JsonResponse({'sucess': True})
