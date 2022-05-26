const searchField = document.getElementById('searchTopBar');
const csrftoken = DjangoUtils.getCookie('csrftoken')
const divContainerMoviesAjx = 'containerMoviesAppAjx'
const classDivChildMovies = ['row', 'row-cols-1', 'row-cols-md-5', 'py-3', 'g-3', 'bg-light', 'rounded']


searchField.addEventListener('keypress', (e) => {
    const searchValue = e.target.value;
    if (e.code === 'Enter') {
        fetch('search/', {
            method: "POST",
            body: JSON.stringify({searchText: searchValue}),
            headers: {
                "content-type": "application/json",
                "X-CSRFToken": csrftoken,
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(res => res.json())
            .then(data => {
                let _html = ''
                let _data = data['data']
                for (let key in _data) {
                    _html += HtmlUtils.getCardMovieHtml(_data[key])
                }
                Utils.removeById(divContainerMoviesAjx)
                Utils.setStyleDisplayById('containerMoviesApp', 'none')
                Utils.appendChild('div', divContainerMoviesAjx, classDivChildMovies, _html, 'containerBase')
            })
    }
})

searchField.addEventListener('keyup', (e) => {
    const searchValue = e.target.value;
    if (searchValue.trim().length === 0) {
        Utils.removeById(divContainerMoviesAjx)
        Utils.setStyleDisplayById('containerMoviesApp', 'flex')
    }
})