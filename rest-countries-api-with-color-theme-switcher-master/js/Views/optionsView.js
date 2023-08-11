import Views from "./Views";
import countriesView from "./countriesView";

class OptionsView extends Views {
  _parentElement = document.querySelector(".country-section");
  _optionsElement = document.querySelector(".filter-by-region");

  addOptionHandler(handler) {
    this._optionsElement.addEventListener("change", function (e) {
      const region = e.target.value.toLowerCase();
      handler(region);
    });
  }

  _generateMarkup() {
    return this._data.map(countriesView._generateMarkupPreview).join("");
  }
}

export default new OptionsView();
