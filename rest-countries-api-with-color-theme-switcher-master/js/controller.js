import * as model from "./model";
import render from "dom-serializer";
// Component Views
import countriesView from "./Views/countriesView";
import detailView from "./Views/detailView";
import searchView from "./Views/searchView";
import optionsView from "./Views/optionsView";
import themeView from "./Views/themeView";

// Control Countries
const controlCountries = async function () {
  try {
    // Dark Theme
    themeView.onLoad();
    // console.log(window.location.href);
    console.log(window.location.search);


    // Wait for data
    await model.loadCountries();

    // Render Countries
    countriesView.render(model.state.countries);
  } catch (err) {
    console.error(err);
  }
};

// Control Detail
const controlDetailCountry = async function () {
  try {
    // Dark Theme
    themeView.onLoad();

    // Get Params
    const params = new URLSearchParams(window.location.search);
    const countryCode = params.get("country");

    // Wait for data
    await model.loadCountriesDetails(countryCode);

    // Render Countries
    detailView.render(model.state.detail.countryDetail);
    console.log(model.state);
  } catch (err) {
    console.error(err);
  }
};

// Search
const controlSearch = function (country) {
  model.loadSearchCountry(country);
  searchView.render(model.state.search.country);
};

// Options
const controlOptions = function (option) {
  model.loadSelectOptions(option);
  optionsView.render(model.state.options.countriesOfRegion);
};

// Dark Theme
const controlThemeMode = function (mode) {
  model.loadThemeMode(mode);
  console.log(model.state);
};

const init = function () {
  // View
  if (window.location.search.includes("?country=")) {
    controlDetailCountry();
    detailView.changeClass();
  } else {
    controlCountries();
  }
  // Handler
  detailView.addDetailHandler();
  searchView.addSearchHandler(controlSearch);
  optionsView.addOptionHandler(controlOptions);
  themeView.addThemeHandler(controlThemeMode);
};
init();


