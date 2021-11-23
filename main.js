const slider = document.querySelectorAll(".slider");
const content = document.querySelectorAll(".content");
let contador = 0;

slider.forEach((slid) =>
  slid.addEventListener("click", () => {
    content.forEach((cont) => {
      cont.classList.remove("active");
    });
    if (slid.classList[0] == "mas") {
      if (contador < content.length - 1) {
        contador++;
      } else {
        contador = 0;
      }
    } else {
      if (contador <= 0) {
        contador = content.length - 1;
      } else {
        contador--;
      }
    }
    content[contador].classList.add("active");
    // console.log(content.length);
    // console.log(contador);
  })
);
