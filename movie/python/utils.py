

def is_ajax(request) -> bool:
    try:
        return request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    except Exception as e:
        raise Exception(e)
