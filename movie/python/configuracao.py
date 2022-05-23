from movie.models import Configuracao


def get_api_key() -> str:
    """
    Function to get API Key on database
    :return: str
    """
    # api = models.Configuracao.objects.get(identificador=settings.THE_MOVIE_DB_IDENTIFY)
    # return api.api_key
    api = Configuracao.objects.all().first().api_key
    return f'api_key={api}'


def get_base_movie_url() -> str:
    return 'https://api.themoviedb.org/3/movie'


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


def get_movie_credits_url(movid_id: str):
    return f'{get_base_movie_url()}/{movid_id}/credits?{get_api_key()}'
    # https://api.themoviedb.org/3/movie/508947/credits?api_key=066727bb2b348791835788085316f6fe&language=en-US
