import Views from "./Views";
import countriesView from "./countriesView";

class searchView extends Views {
  _parentElement = document.querySelector(".country-section");
  _searchForm = document.querySelector(".search-form");

  addSearchHandler(handler) {
    this._searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const searchInput = document.querySelector(".search-input");
      const country = searchInput.value.toLowerCase();
      searchInput.value = "";
      handler(country);
    });
  }


  _generateMarkup() {
    return this._data.map(countriesView._generateMarkupPreview).join("");
  }
}

export default new searchView();
