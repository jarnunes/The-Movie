from django.shortcuts import render
from movie.python import themovie_api


def init(request):
    return render(request=request, template_name=('movie/index.html'))


def popular(request):
    movies = themovie_api.popular()
    context = {'movies': movies}
    return render(request=request, template_name='movie/index.html', context=context)


def search(request):
    ...


def new_movies(request):
    ...
