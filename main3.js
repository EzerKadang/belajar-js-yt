// const arraySaya = ["⭐", "👇", "😂"];
// console.log(arraySaya);

// const arrayKamu = [];
// arrayKamu[0] = "💕";
// arrayKamu[1] = "❤️";
// arrayKamu[2] = "😍";

// console.log(arrayKamu);

// const arrayBaru = new Array("😍", "❤️", "😂", "😒");
// console.log(arrayBaru);

// const arrayBaru1 = new Array();
// arrayBaru1[0] = "😒";
// arrayBaru1[3] = "💕";
// arrayBaru1[1] = "😒";
// console.log(arrayBaru1);

// const AgamaIdn = ["✝️", "☪️", "🕉️", "✡️", "☯️"];
// const isAgama = AgamaIdn.includes("✡️");

// if (isAgama) {
//   const PosAgama = AgamaIdn.indexOf("✡️");
//   const indexBefore = PosAgama - 1;
//   const indexAfter = PosAgama + 1;
//   const before = AgamaIdn[indexBefore];
//   const after = AgamaIdn[indexAfter];
//   console.log(`posisi sebelum agama saya ${before} dan setelahnya ${after}`);
//   const agamaAwal = AgamaIdn.shift(); //or using AgamaIdn[0]
//   const agamaAkhir = AgamaIdn.pop(); //or using AgamaIdn[4] or AgamaIdn[AgamaIdn.length-1]
//   console.log(`posisi agama awal adalah ${agamaAwal}`);
//   console.log(`posisi agama akhir adalah ${agamaAkhir}`);
// } else {
//   console.log("saya tida tahu");
// }

// console.log(isAgama);

// const arrayBuah = [];

// arrayBuah["semangka"] = "🍉";
// arrayBuah["pisang"] = "🍌";
// arrayBuah["anggur"] = "🍇";
// console.log(arrayBuah);

// duplikasi data ori
// const buahSaya = ["🍇", "🍌", "🍉", "🍍", "🍏"]; // ori

// const newBuah = Array.from(buahSaya); // kw
// const newBuah1 = [...buahSaya]; // kw
// const newBuah2 = buahSaya.slice(); // kw
// const newBuah3 = JSON.parse(JSON.stringify(buahSaya)); // kw

// newBuah[0] = "😒";
// newBuah1[1] = "😒";
// newBuah2[2] = "😒";
// newBuah3[3] = "😒";

// console.log(buahSaya);
// console.log(newBuah);
// console.log(newBuah1);
// console.log(newBuah2);
// console.log(newBuah3);

// tipe data di array
// const dataArray = ["😒", 10, { buah: "tomato" }, ["buah", "pisang"]];

// // console.log(dataArray);
// console.log(dataArray[3][1]); //memanggil array dalam array
// console.log(dataArray[2].buah); // memanggil object

//Menggabungkan Array
// const arraySaya = ["🍇", "🍌", "🍉"];
// const arrayKamu = ["💕", "😍", "😒"];

// const mergeArray = arraySaya.concat(arrayKamu);

// mapping data array
// for (List of mergeArray) console.log(List);
// mergeArray.map((value, index) => console.log(value, index));

const dataUser = [
  {
    name: "Ezer Kadang",
    Stack: "Good Polish",
    age: 20,
  },
  {
    name: "Sambo",
    Stack: "killer",
    age: 30,
  },
  {
    name: "Santo",
    Stack: "right hand sambo",
    age: 40,
  },
  {
    name: "sogi",
    Stack: "another right hand sambo",
    age: 45,
  },
];

// mapping data
// dataUser.map((show) => {
//   console.log(show);
// });

// mapping and sort/mengurutkan data
// dataUser
//   .sort((a, b) => a.age - b.age)
//   .map((show) => {
//     console.log(show);
//   });

// filter, sort, and mapping data
dataUser
  .sort((a, b) => b.age - a.age)
  .filter((x) => x.age >= 30)
  .map((show) => {
    console.log(show);
  });
