from django.http import JsonResponse
from django.shortcuts import render
from . import processes


def get_all_processes(request):
    p = processes.Processes()
    p.init_data()
    tree_view = p.normalize_data()
    return JsonResponse(tree_view)
