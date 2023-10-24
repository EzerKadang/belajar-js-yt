//for
// for(//statement 1 (initialisasi), //statement 2 (Condition), //statement 3(effect))

// for (let y = 1; y <= 5; y++) {
//   console.log(`data ke - ${y}`);
// }

// data ke - 1 -------------- z = 2
// data ke - 2 -------------- z = 3
// data ke - 2 -------------- z = 4
// data ke - 4 -------------- z = 5
// data ke - 5 -------------- z = 6
// end of loop

// for (let y = 1; y <= 5; y++) {
//   console.log(`data for ke - ${y}`);
// }

// let x = 10;
// let z = 10;
// // while
// while (x <= 5) {
//   console.log(`data while ke - ${x}`);
//   x++;
// }

// // do while
// do {
//   console.log(`data do while ke - ${z}`);
//   z++;
// } while (z <= 5);

// Tugas;
let x = [3, 5, 12];
//for
let totalFor = 0;
for (let i = 0; i < x.length; i++) {
  totalFor += x[i];
}

console.log(
  `total nilai for adalah ${totalFor} karena 3 + 5 + 12  = ${totalFor}`
);

//while
let totalWhile = 0;
let w = 0;

while (w < x.length) {
  totalWhile += x[w];
  w++;
}

console.log(
  `total nilai While adalah ${totalWhile} karena 3 + 5 + 12  = ${totalWhile}`
);

//Do While
let totalDoWhile = 0;
let y = 0;
do {
  totalDoWhile += x[y];
  y++;
} while (y < x.length);

console.log(
  `total nilai While adalah ${totalDoWhile} karena 3 + 5 + 12  = ${totalDoWhile}`
);
