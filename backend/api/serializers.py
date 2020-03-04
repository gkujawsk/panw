from .models import Notatka

from rest_framework import permissions, serializers

class NotatkaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Notatka
        fields = '__all__'