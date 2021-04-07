document.addEventListener("click", (event) => {
  event.preventDefault();
});

document.queryCommandEnabled("h1").style.color = "red";
document.queryCommandEnabled("h2").style.color = "darkred";
document.queryCommandEnabled("p").style.color = "lightcoral";
