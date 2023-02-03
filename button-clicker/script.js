
    const btn = document.getElementById("Loginbutton")
      

btn.addEventListener("click", function (e) {
  if (btn.innerHTML === "Login") {
    btn.innerHTML = "Log-out";
  } else {
    btn.innerHTML = "Login";
  }
});

function addDef(element){
    element.remove();
}