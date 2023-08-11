import Views from "./Views";

class DetailView extends Views {
  _parentElement = document.querySelector(".country-section");
  _data;

  addDetailHandler() {
    this._parentElement.addEventListener("click", function (e) {
      // Guard
      if (!e.target.closest(".back-btn")) return;
      // Change href
      window.location.href = "/";
      // Change class
      document
        .querySelector(".country-section")
        .classList.remove("country-section-detail");
    });
  }

  changeClass() {
    this._parentElement.classList.add("country-section-detail");
    document.querySelector(".filter-section").classList.add("hidde");
  }

  _generateMarkup() {
    return `
    <button class="back-btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 arrow-icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
    Back
  </button>
  <div class="detail-box">
    <img src="${this._data.flag}" class="detail-flag" />
    <div class="detail-info">
      <h1 class="country-name">${this._data.name}</h1>
      <ul class="detail-info-list first-list">
        <li class="info-item">
          <strong class="info">
            Native Name: <span class="data">${
              this._data.nativeName.common
            }</span>
          </strong>
        </li>
        <li class="info-item">
          <strong class="info">
            Population: <span class="data">${this._data.population}</span>
          </strong>
        </li>
        <li class="info-item">
          <strong class="info">
            Region: <span class="data">${this._data.region}</span>
          </strong>
        </li>
        <li class="info-item">
          <strong class="info">
            Sub Region: <span class="data">${this._data.subRegion}</span>
          </strong>
        </li>
        <li class="info-item">
          <strong class="info">
            Capital: <span class="data">${this._data.capital
              .map((capital) => capital)
              .join("")}</span>
          </strong>
        </li>
      </ul>
      <ul class="detail-info-list second-list">
        <li class="info-item">
          <strong class="info">
            Top Level Domain: <span class="data">${
              this._data.topLevelDomain
            }</span>
          </strong>
        </li>
        <li class="info-item">
          <strong class="info">
            Currencies: <span class="data">${this._data.currencies.name}</span>
          </strong>
        </li>
        <li class="info-item">
          <strong class="info">
            Languages: <span class="data">${this._data.lng
              .map((l) => l)
              .join(", ")}</span>
          </strong>
        </li>
      </ul>
      <span class="border-top">Border countries:</span>
      <ul class="border-countries">
     ${
       this._data.borders === undefined
         ? ""
         : this._data.borders.map(this._generateMarkupBorders).join("")
     }
      </ul>
    </div>
  </div>

    `;
  }

  _generateMarkupBorders(result) {
    return `
    <li class="border-c">${result}</li>
    `;
  }
}

export default new DetailView();
