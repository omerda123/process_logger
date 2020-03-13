from django.urls import path
from . import views

app_name = "processes"

urlpatterns = [
    path('processes/', views.get_all_processes)
]
