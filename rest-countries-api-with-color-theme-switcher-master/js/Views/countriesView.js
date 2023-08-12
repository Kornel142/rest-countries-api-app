import Views from "./Views";


class CountriesView extends Views {
  _parentElement = document.querySelector(".country-section");
  _data;

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(result) {
    return `
   <a class="country-container" href="?country=${result.code}">
      <img
        src="${result.flag}"
        class="country-flag"
        alt="country-flag"
      />
      <div class="info-container">
        <span class="country-name">${result.name}</span>
        <ul class="country-info-list">
          <li class="info-item">
            <strong class="info">
              Population: <span class="data">${result.population}</span>
            </strong>
          </li>
          <li class="info-item">
            <strong class="info">
              Region: <span class="data">${result.region}</span>
            </strong>
          </li>
          <li class="info-item">
            <strong class="info">
              Capital: <span class="data">${result.capital}</span>
            </strong>
          </li>
        </ul>
      </div>
    </a>
    `;
  }
}

export default new CountriesView();
