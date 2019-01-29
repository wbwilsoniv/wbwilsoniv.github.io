function show(proj) {
  let deets = document.querySelector(`#${proj}Deets`);
  deets.classList.add("is-visible");
}

function hideDetails(proj) {
  let deets = document.querySelector(`#${proj}Deets`);
  deets.classList.remove("is-visible");
}

function showHamburger() {
  let menu = document.querySelector("nav");
  menu.classList.toggle("is-visible");
}

function pageLoad() {
  let details = document.getElementsByClassName("deets");
  let deetArr = Array.from(details);
  deetArr.map(item => {
    item.addEventListener("click touchstart", e => {
      e.preventDefault();
      show(item.id);
    });
  });

  let hide = document.getElementsByClassName("hide");
  let hideArr = Array.from(hide);
  hideArr.map(item => {
    item.addEventListener("click touchstart", e => {
      e.preventDefault();
      hideDetails(item.id);
    });
  });
  let handleTouch = function(e) {
    e.preventDefault();
    console.log(hamburg);
    showHamburger();
  };

  let hamburg = document.getElementById("ham");
  hamburg.addEventListener("touchstart", handleTouch, false);
}
pageLoad();
