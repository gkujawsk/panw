from django.shortcuts import render
from rest_framework import filters, viewsets, status
from rest_framework.authentication import (BasicAuthentication, SessionAuthentication)
from rest_framework.decorators import action, api_view
from rest_framework.permissions import IsAuthenticated, DjangoModelPermissions, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination

from .serializers import NotatkaSerializer
from .models import Notatka

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

# Create your views here.

class NotatkaViewSet(viewsets.ModelViewSet):
    pagination_class = StandardResultsSetPagination
    queryset = Notatka.objects.all()
    serializer_class = NotatkaSerializer

