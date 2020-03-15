from django.urls import path
from . import views

app_name = "processes"

urlpatterns = [
    path('processes_tree/', views.get_tree_data),
    path('insert_process/', views.insert_data),
    path('get_log/', views.get_all_records),
]
