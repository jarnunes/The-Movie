from django.contrib import admin
from .models import Configuracao


class ConfiguracaoAdmin(admin.ModelAdmin):
    fields = ('api_key',)


admin.site.register(Configuracao, ConfiguracaoAdmin)
