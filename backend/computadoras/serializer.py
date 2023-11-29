from rest_framework import serializers
from .models import Computadora,Pais

# Creamos un modelo para que serialize los datos obtenidos de la bse a json
class ComputadoraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computadora
        fields = '__all__'      #Serializa todos los campos

        # Serializa campos seleccionados
        # fields = (
        #     'id',
        #     'nombre',
        #     'pais',
        #     'nodos',
        #     'num_cores',
        #     'num_ram_tb',
        #     'almacenamiento_tb',
        #     'teraflops',
        #     'sistema_operativo'
        # )

class PaisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pais
        fields = '__all__'      #Serializa todos los campos

