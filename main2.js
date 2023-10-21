// console.log(document.title);

document.title = "eserK";

// console.log(document.title);

// const body = document.body;
// body.append("HELLO WORLD"); //menampilkan text kebody html

// const h1 = document.createElement("h1"); //membuat element h1
// h1.textContent = "</br>anjay ini h1";

// const saya = document.createElement("p");
// saya.innerHTML = "</br>Anjay ini P";

// const test = document.createElement("b");
// test.innerText = "</br>anjay ini b";

// body.append(h1);
// body.append(saya);
// body.append(test);

const body = document.body;
// const btnElm = document.getElementById("btn-1");

// const defText = "test1";
// btnElm.textContent = defText;

// function gantiWarna() {
//   btnElm.style.background = "aqua";
//   const addText = document.createElement("p");
//   addText.innerText = "hallo pak";
//   body.append(addText);
// }

// function ubahText() {
//   btnElm.textContent = "hihihi";
// }

// function oriText() {
//   btnElm.textContent = defText;
// }

const btnElm1 = document.querySelector(".btn-2");

const name1 = document.createElement("h1");

function addName() {
  name1.innerHTML = "Ezer Kadang";
  body.append(name1);
}

function cosColor() {
  name1.style.color = "red";
}
