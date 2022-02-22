const acc = document.getElementsByClassName("accordion-question");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let result = this.classList.toggle("active");
    for (j = 0; j < acc.length; j++) {
      if (j !== i) acc[j].classList.remove("active");
      acc[j].nextElementSibling.style.maxHeight = null;
    }
    var panel = this.nextElementSibling;
    if (!result) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
