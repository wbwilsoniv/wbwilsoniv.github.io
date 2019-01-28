function show(proj) {
  let deets = document.querySelector(`#${proj}Deets`);
  deets.classList.add("is-visible");
}

function hideDetails(proj) {
  let deets = document.querySelector(`#${proj}Deets`);
  deets.classList.remove("is-visible");
}

function pageLoad() {
  let details = document.getElementsByClassName("deets");
  let deetArr = Array.from(details);
  deetArr.map(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      show(item.id);
    });
  });

  let hide = document.getElementsByClassName("hide");
  let hideArr = Array.from(hide);
  hideArr.map(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      hideDetails(item.id);
    });
  });
}
pageLoad();
