import fetch from "node-fetch";
import connectConfig from "../constants/constants";

class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  // Функция связи с сервером
  _transmit(url, method, body = "") {
    const localParams = { method: method };
    localParams.headers = { ...this._headers };
    if (body) {
      localParams.body = JSON.stringify(body);
    }
    return fetch(url, localParams);
  }

  // eslint-disable-next-line class-methods-use-this
  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(
        new Error(`На сервере произошла ошибка! ${res.status} ${res.message}`)
      );
    }
    return res.json();
  }

  // В принцице эта функция просто подсчитывает колличесто возвращенных записей
  sendData(payload) {
    return this._transmit(this._baseUrl, "POST", payload).then(
      this._checkResponse
    );
  }
}

console.log(connectConfig);
const api = new Api(connectConfig);
export default api;
