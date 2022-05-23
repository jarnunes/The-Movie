from django.db import models


class Configuracao(models.Model):
    identificador = models.CharField(max_length=100, unique=True, default='key_dbmovie', editable=False)
    api_key = models.CharField(max_length=225, unique=True)

    def __str__(self):
        return self.identificador
