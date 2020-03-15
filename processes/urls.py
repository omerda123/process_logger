from django.urls import path
from . import views

app_name = "processes"

urlpatterns = [
    path('processes/', views.get_all_processes),
    path('insert_process/', views.insert_data),
    path('get_log/', views.get_all_records),
]
