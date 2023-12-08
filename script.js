function myFunction() {
  let x = document.getElementById("navbar-links-j");
  if ((x.style.display = "none")) {
    x.style.display = "block";
  }
}

function myFunctionClose() {
  let y = document.getElementById("navbar-links-j");
  if (y.style.display === "block") {
    y.style.display = "none";
  }
}
