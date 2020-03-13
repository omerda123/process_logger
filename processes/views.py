from django.http import JsonResponse
from django.shortcuts import render
from . import processes
from . import models


def get_all_processes(request):
    p = processes.Processes()
    p.init_data()
    tree_view = p.normalize_data()
    return JsonResponse(tree_view)


def insert_data(request):
    if request.method == 'POST':
        models.Process.objects.create(mac_address=request.POST['mac_address'],
                                      process_list=request.POST['process_list'])
    return JsonResponse({'success': True})
