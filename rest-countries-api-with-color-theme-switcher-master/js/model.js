import { async } from "regenerator-runtime";
import dataJson from "../data.json";
import { getJSON } from "./helpers";
import { API_URL_CODE, API_URL_ALL } from "./config";
import _ from "lodash";

export const state = {
  darkModeOff: true,
  options: {
    region: "",
    countriesOfRegion: [],
  },
  search: {
    query: "",
    country: {},
  },
  countries: [],
  detail: {
    countryDetail: {},
    countryCode: "",
  },
};

// Load Main
export const loadCountries = async function () {
  try {
    const data = await getJSON(API_URL_ALL);
    state.countries = data.map((country) => {
      return {
        name: country.name.common,
        flag: country.flags.png,
        population: country.population.toLocaleString(),
        region: country.region,
        capital: country.capital,
        code: country.cca3,
      };
    });
  } catch (err) {
    console.error(err);
  }
};

// Load Details
export const loadCountriesDetails = async function (countryCode) {
  try {
    state.detail.countryCode = countryCode;
    const data = await getJSON(`${API_URL_CODE}/${countryCode}`);
    if (!countryCode) return;

    const [detail] = data;
    state.detail.countryDetail = {
      name: detail.name.common,
      nativeName: _.find(detail.name.nativeName),
      flag: detail.flags.png,
      population: detail.population.toLocaleString(),
      region: detail.region,
      subRegion: detail.subregion,
      capital: detail.capital,
      topLevelDomain: detail.tld[0],
      borders: detail.borders,
      lng: Object.values(detail.languages),
      currencies: _.find(detail.currencies),
    };
  } catch (err) {
    console.error(err);
  }
};

// Search Country
export const loadSearchCountry = function (countryName) {
  state.search.query = countryName;

  state.search.country = state.countries.filter((country) =>
    country.name.toLowerCase().includes(countryName)
  );
  console.log(state.search.country);
};

// Options
export const loadSelectOptions = function (region) {
  state.options.region = region;

  state.options.countriesOfRegion = state.countries.filter(
    (country) => country.region.toLowerCase() === region
  );
};

export const loadThemeMode = function (mode) {
  state.darkModeOff = mode;
};
