from  rest_framework import viewsets
from .serializer import ComputadoraSerializer, PaisSerializer
from .models import Computadora,Pais

# Se crea la vista para que tenga rapidamente los métodos http 
class ComputadoraView(viewsets.ModelViewSet):
    serializer_class = ComputadoraSerializer
    queryset = Computadora.objects.all()


class PaisView(viewsets.ModelViewSet):
    serializer_class = PaisSerializer
    queryset = Pais.objects.all()