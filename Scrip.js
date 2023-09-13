const body = document.querySelector("body"),
  barra = body.querySelector(".barra"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwtich = body.querySelector(".toggle-switch"),
  modotext = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  barra.classList.toggle("close");
});

modeSwtich.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modotext.inneText = "1";
  } else {
    modotext.inneText = "modo noche";
  }
});
