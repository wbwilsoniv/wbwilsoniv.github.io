const details = document.querySelector(".deets");
const hide = document.querySelector(".hide");

function pageLoad() {
  details.addEventListener("click", e => {
    e.preventDefault();
    showDetails();
    console.log(e.target);
  });
  hide.addEventListener("click", e => {
    e.preventDefault();
    hideDetails();
  });
}
pageLoad();

function showDetails() {
  let projDeet = document.querySelector(".projDeets");
  projDeet.classList.add("is-visible");
}

function hideDetails() {
  let projDeet = document.querySelector(".projDeets");
  projDeet.classList.remove("is-visible");
}
