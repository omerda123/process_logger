from django.contrib import admin
from django.urls import path, include
import processes.urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('processes.urls'))
]
