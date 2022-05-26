const btn = document.querySelectorAll(".kotak div");
const gunting = document.querySelector(".kotak .gunting");
const kertas = document.querySelector(".kotak .kertas");
const batu = document.querySelector(".kotak .batu");
const answer = document.querySelector(".main .answer");
const close = document.querySelector(".answer p");
const newP = document.createElement("h1");
const layer = document.querySelector(".layer");

function funPilihanKomputer() {
  let pc = Math.floor(Math.random() * 3);
  if (pc == 0) return "gunting";
  else if (pc == 1) return "kertas";
  else if (pc == 2) return "batu";
}

function funHasil(pc, person) {
  if (person === pc) return "SERI";
  if (person == "gunting") return pc == "kertas" ? "MENANG" : "KALAH";
  if (person == "kertas") return pc == "batu" ? "MENANG" : "KALAH";
  if (person == "batu") return pc == "gunting" ? "MENANG" : "KALAH";
  return "Anda Memilih Pilihan yang Tidak Sesuai";
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (btn[i].className == "gunting") {
      if (funHasil(funPilihanKomputer(), btn[i].className) == "MENANG") {
        answer.style.display = "inline";
        newP.innerHTML = "WINNER";
        newP.style.fontSize = "100px";
        close.before(newP);
        layer.style.display = "inline";
      } else if (funHasil(funPilihanKomputer(), btn[i].className) == "KALAH") {
        answer.style.display = "inline";
        newP.innerHTML = "LOSER";
        newP.style.fontSize = "100px";
        close.before(newP);
        layer.style.display = "inline";
      } else {
        answer.style.display = "inline";
        newP.innerHTML = "DRAW";
        newP.style.fontSize = "100px";
        close.before(newP);
        layer.style.display = "inline";
      }
    } else if (btn[i].className == "kertas") {
      if (funHasil(funPilihanKomputer(), btn[i].className) == "MENANG") {
        answer.style.display = "inline";
        newP.innerHTML = "WINNER";
        newP.style.fontSize = "100px";
        close.before(newP);
        layer.style.display = "inline";
      } else if (funHasil(funPilihanKomputer(), btn[i].className) == "KALAH") {
        answer.style.display = "inline";
        newP.innerHTML = "LOSER";
        newP.style.fontSize = "100px";
        close.before(newP);
        layer.style.display = "inline";
      } else {
        answer.style.display = "inline";
        newP.innerHTML = "DRAW";
        newP.style.fontSize = "100px";
        close.before(newP);
        layer.style.display = "inline";
      }
    } else if (btn[i].className == "batu") {
      if (funHasil(funPilihanKomputer(), btn[i].className) == "MENANG") {
        answer.style.display = "inline";
        newP.innerHTML = "WINNER";
        newP.style.fontSize = "100px";
        close.before(newP);
        layer.style.display = "inline";
      } else if (funHasil(funPilihanKomputer(), btn[i].className) == "KALAH") {
        answer.style.display = "inline";
        newP.innerHTML = "LOSER";
        newP.style.fontSize = "100px";
        close.before(newP);
        layer.style.display = "inline";
      } else {
        answer.style.display = "inline";
        newP.innerHTML = "DRAW";
        newP.style.fontSize = "100px";
        close.before(newP);
        layer.style.display = "inline";
      }
    }
  });
}
close.addEventListener("click", function () {
  answer.style.display = "none";
  layer.style.display = "none";
});
