import { at } from "lodash";

export default class Views {
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }


  _clear() {
    this._parentElement.innerHTML = "";
  }
}
