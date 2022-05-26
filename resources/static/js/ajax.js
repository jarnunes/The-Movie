const searchField = document.getElementById('searchTopBar');
const csrftoken = DjangoUtils.getCookie('csrftoken')
const divContainerMoviesAjx = 'containerMoviesAppAjx'
const classDivChildMovies = ['row', 'row-cols-1', 'row-cols-md-5', 'py-3', 'g-3', 'bg-light', 'rounded']
const containerModalId = 'containerModalInfoMovie'
const idModal = 'modalInfoMovie'


function eventMovieInfo() {
    document.querySelectorAll('.even-modal').forEach(element => {
        element.addEventListener('click', (evt) => {
            fetch(`search/${evt.target.id}`, {
                method: 'GET',
                headers: {"X-Requested-With": "XMLHttpRequest"}
            }).then(res => res.json())
                .then(data => {
                    let html = HtmlUtils.getHtmlModal(data['data'], idModal)
                    Utils.appendChild('div', containerModalId, null, html, null, true)
                    AjaxUtils.openModal(idModal)
                })
        })
    })
}

function closeModal() {
    AjaxUtils.closeModal(idModal)
    Utils.removeById(containerModalId)
}

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
                eventMovieInfo()
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


eventMovieInfo()