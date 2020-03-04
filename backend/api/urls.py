from django.urls import include, path
from rest_framework import routers
from .views import NotatkaViewSet

router = routers.DefaultRouter()
router.register(r'notatka', NotatkaViewSet)

urlpatterns = [
    path('', include(router.urls))
]
