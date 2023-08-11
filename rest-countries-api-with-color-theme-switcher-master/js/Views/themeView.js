import Views from "./Views";

class Theme extends Views {
  _parentElement = document.querySelector(".dark-theme-btn");

  addThemeHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      let darkState;
      if (!e.target.closest(".dark-theme-btn")) return;
      const darkMode = localStorage.getItem("dark-mode") === "true";
      localStorage.setItem("dark-mode", !darkMode);
      const body = document.querySelector("body");
      body.classList.toggle("dark-mode", !darkMode);
      handler(darkMode);
    });
  }

  onLoad() {
    document.body.classList.toggle(
      "dark-mode",
      localStorage.getItem("dark-mode") === "true"
    );
  }

}

export default new Theme();
