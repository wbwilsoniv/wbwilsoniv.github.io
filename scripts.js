function show(proj) {
  let deets = document.querySelector(`#${proj}Deets`);
  deets.classList.add("is-visible-deets");
}

function hideDetails(proj) {
  let deets = document.querySelector(`#${proj}Deets`);
  deets.classList.remove("is-visible-deets");
}

function showHamburger() {
  let menu = document.querySelector("nav");
  menu.classList.toggle("is-visible");
}

function pageLoad() {
  let handleTouchShow = function(e) {
    e.preventDefault();
    show(e.target.id);
    console.log(e.target.id);
  };

  let details = document.getElementsByClassName("deets");
  let deetArr = Array.from(details);
  deetArr.map(item => {
    item.addEventListener("touchstart", handleTouchShow, false);
    item.addEventListener("click", e => {
      e.preventDefault();
      show(item.id);
    });
  });

  let handleTouchHide = function(e) {
    e.preventDefault();
    hideDetails(e.target.id);
    console.log(hamburg);
  };

  let hide = document.getElementsByClassName("hide");
  let hideArr = Array.from(hide);
  hideArr.map(item => {
    item.addEventListener("touchstart", handleTouchHide, false);
    item.addEventListener("click", e => {
      e.preventDefault();
      hideDetails(item.id);
    });
  });
  let handleTouchHam = function(e) {
    e.preventDefault();
    console.log(hamburg);
    showHamburger();
  };

  let hamburg = document.getElementById("ham");
  hamburg.addEventListener("touchstart", handleTouchHam, false);
}
pageLoad();
