from movie.python import configuracao
import requests


def __get_movies(url: str, json=True):
    """
    Function to get movies from TheMovieDB API

    :param url: complete url or queryset
    :param json: True by default. If true, this function returns a JSON object from response
    :return: API response
    """
    try:
        result = requests.get(url)
        if json:
            return result.json()
        return result
    except Exception as error:
        raise Exception(error)


def __set_poster_path_url(movies: dict) -> dict:
    for key, value in movies.items():
        movies[key]['poster_path'] = configuracao.get_base_image_url() + value.get('poster_path')
    return movies


def get_movies_json(response) -> dict:
    new_dict = {}
    movies_list = response.get('results')
    try:
        for movie in movies_list:
            new_dict[movie.get('id')] = movie
        # set complete poster_path URL
        return __set_poster_path_url(new_dict)
    except Exception as e:
        print(e)
        return {'error': e}


def popular():
    url = f'{configuracao.get_base_movie_url()}/popular?{configuracao.get_api_key()}'
    result = __get_movies(url)
    return get_movies_json(result)
