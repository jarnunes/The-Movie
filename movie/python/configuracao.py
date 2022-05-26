from movie.models import Configuracao


def get_api_key() -> str:
    r"""
    Returns API Key from database

    :return: str
    """
    api = Configuracao.objects.all().first().api_key
    return f'api_key={api}'


def get_base_url() -> str:
    r"""
    Returns base url from API https://api.themoviedb.org/3

    :return: str
    """
    return 'https://api.themoviedb.org/3'


def get_base_movie_url() -> str:
    return f'{get_base_url()}/movie'


def get_url(category, url_parameters: dict) -> str:
    url = f'{get_base_url()}/{category}?{get_api_key()}'
    for k, v in url_parameters.items():
        url += f'&{k}={v}'
    return url


def get_movie_url(category=None, movie_id=None) -> str:
    """
    Returns movie url based on parameters

    Example with movie_id parameter equals 508947
    https://api.themoviedb.org/3/movie/508947?api_key=<<API_KEY>>

    :param category: str
    :param movie_id: int
    :return: str
    """
    if category is not None:
        return f'{get_base_movie_url()}/{category}?{get_api_key()}'
    if movie_id is not None:
        return f'{get_base_movie_url()}/{movie_id}?{get_api_key()}'


def get_base_image_url() -> str:
    return 'https://image.tmdb.org/t/p/w500'


def get_movie_redirect_url():
    return 'https://www.themoviedb.org/movie'


def get_search_url():
    return f'{get_base_url()}/search'


def get_movie_credits_url(movid_id: str):
    return f'{get_base_movie_url()}/{movid_id}/credits?{get_api_key()}'
    # https://api.themoviedb.org/3/movie/508947/credits?api_key=066727bb2b348791835788085316f6fe&language=en-US
