document.querySelector(".hamburger").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("is-active");
});


function myFunction() {
  var x = document.getElementById("mynav");
  if (x.style.display === "block") {
    x.style.transition = "all 0.5s";
    x.style.display = "none";
  } else {
    x.style.transition = "all 0.5s";
    x.style.display = "block";
  }
}
