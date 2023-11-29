from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from computadoras import views          # Importamos todas las vistas en el archivo views.py


# Versionamiento de API

router = routers.DefaultRouter()
router.register(r'computadoras',views.ComputadoraView,'computadoras')

router.register(r'pais',views.PaisView,'pais')


# Agregamos las urls de las vistas que pueden acceder a GET,POST,PUT,DELETE
urlpatterns = [
    path('api/v1/',include(router.urls)),
    path('docs/',include_docs_urls(title="Computadoras API"))
]
