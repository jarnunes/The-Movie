class Utils {
    static isJSONEmpty(json) {
        return json == null || Object.keys(json).length === 0;
    }

    static existsElement(idElement) {
        return document.contains(document.getElementById(idElement))
    }

    static setStyleDisplayById(idElement, styleDisplay) {
        if (this.existsElement(idElement)) {
            document.getElementById(idElement).style.display = styleDisplay
            return true;
        }
        return false;
    }

    static removeById(elementId) {
        if (this.existsElement(elementId)) {
            document.getElementById(elementId).remove()
            return true;
        }
        return false;
    }

    static appendChild(tagName, elementId, classList, html, idContainer, appendToBody = false) {
        try {
            let childElement = document.createElement(tagName);
            childElement.id = elementId
            if (classList != null) {
                childElement.classList.add(...classList)
            }
            childElement.innerHTML = html
            if (idContainer != null && this.existsElement(idContainer)) {
                document.getElementById(idContainer).appendChild(childElement)
            }
            if (appendToBody && idContainer === null) {
                document.body.appendChild(childElement)
            }
        } catch (e) {
            throw new Error(e)
        }
    }
}

class AjaxUtils {
    static refreshContainer(containerId) {
        $(`#${containerId}`).load(window.location.href + ` #${containerId}`);
    }

    static openModal(idModal) {
        $(`#${idModal}`).modal('show');
    }

    static closeModal(idModal) {
        $(`#${idModal}`).modal('hide');

    }

}

class DjangoUtils {
    static getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
}

class HtmlUtils {
    static getCardMovieHtml(value) {
        return `
        <div class="col">
                    <div class="card h-100">
                        <div class="image-container">
                            <div class="image">
                                <a href="${value.redirect_url}" target="_blank">
                                    <img src="${value.poster_path}" class="card-img-top"
                                         alt="...">
                                </a>
                            </div>
                            <div class="parent">
                                <span class="view"><i class="bi bi-eye-fill"></i> ${value.popularity}</span>
                                <span class="range"><i class="bi bi-star-fill"></i> ${value.vote_average}</span>
                            </div>
                        </div>

                        <div class="card-body">
                            <a href="#" class="hover"><h5 class="card-title">${value.title}</h5></a>
                            <div class="info-preview">
                        <span data-bs-toggle="tooltip" aria-current="page" title="Diretor" data-bs-placement="right">
                            <i class="bi bi-megaphone-fill"></i> Director Name
                        </span>
                                <span class="d-block"><i
                                        class="bi bi-clock-fill"></i> ${value.release_date}</span>
                            
                            <span class="d-block even-modal" id="${value.id}" style="cursor: pointer">
                                <i class="bi bi-info-circle-fill"></i> Sinopse
                            </span>
                           </div>
                        </div>
                    </div>
                </div>
        `;
    }

    static getHtmlModal(json, idModal) {
        return `<!-- Modal -->
            <div class="modal fade" id="${idModal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${json.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="closeModal()"></button>
                        </div>
                        <div class="modal-body">
                            ${json.overview}
                        </div>
                    </div>
                </div>
            </div>`
    }
}