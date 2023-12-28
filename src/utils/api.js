import PropTypes from 'prop-types';
class Api {
    constructor({ baseUrl, headers }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    _request(url, options) {
        return fetch(url, options).then(this._checkResponse);
    }

    getInfo() {
        return this._request(`${this._baseUrl}`, {
            headers: this._headers
        });
    }
}

const api = new Api({
    baseUrl: 'https://norma.nomoreparties.space/api/ingredients',
    headers: {
        'Content-Type': 'application/json'
    }
});

api.propTypes = {
    baseUrl: PropTypes.string.isRequired
};
export default api;
