from django.db import models

class Pais(models.Model):
    nombre = models.CharField(max_length=50)

    # Que mostrará en el panel administrador
    def __str__(self):
        return self.nombre

class Computadora(models.Model):
    nombre = models.CharField(max_length=200)
    pais = models.ForeignKey(Pais, on_delete=models.SET_NULL, null=True)
    nodos = models.PositiveIntegerField()
    num_cores = models.PositiveIntegerField()
    num_ram_tb = models.DecimalField(max_digits=15, decimal_places=3)
    almacenamiento_tb = models.DecimalField(max_digits=15, decimal_places=3)
    teraflops = models.DecimalField(max_digits=16, decimal_places=3)
    sistema_operativo = models.CharField(max_length=200)
    rank = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.nombre