// function

// cara function 1
// function addName() {
//   return "ezer kadang";
// }

// alert(addName());

// cara function 2
// function addName(fullName) {
//   return fullName;
// }

// alert(addName("ezer Kadang"));

//mode belajar
// function addName(firsName, lastName) {
//   console.log(firsName);
//   console.log(lastName);
// }

// addName("ezer", "kadang");

// tanpa deklarasi
// function addName() {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
// }

// addName("ezer", "kadang");

// membuat function dengan cara dimasukan variabel

// cara 1 create new fuction
// const sum1 = new Function("x", "y", "console.log(x + y)");

// sum1(1, 2);

// // cara 2 standart function
// function sum(x, y) {
//   console.log(x + y);
// }

// sum(1, 2);

// // cara 3 arrow function
// const sum2 = (x, y) => {
//   console.log(x + y);
// };

// sum2(2, 2);

// Tugas
// 1. Menghitung luas lingkaran, Luas Segitiga, Luas persegi Panjang, Luas Jajar Genjang
const luasLingkaran = (y, z) => {
  console.log(`luas lingkaran 28cm = ${(22 / 7) * y * z} cm`);
};

luasLingkaran(14, 14);

const luasSegitiga = (a, t) => {
  console.log(
    `luas Segitiga alas 20 cm dan tinggi 10cm = ${(1 / 2) * a * t} cm`
  );
};

luasSegitiga(12, 10);

const luasPersegiPanjang = (p, l) => {
  console.log(`luas persegi panjang lebar 10cm panjang 5 = ${p * l} cm`);
};

luasPersegiPanjang(5, 10);

const luasJajargenjang = (a, t) => {
  console.log(`luas jajar genjang lebar 10cm panjang 5 = ${a * t} cm`);
};

luasJajargenjang(5, 10);

// 2. menghitung total gaji yang didapat dalam satu bulan dengan input minimal, Nama Karyawan, gaji harian, Jumlah haru masuk kerja

const totalGajiKaryawan = (namaKaryawan, gajiHarian, totalAbsen) => {
  console.log(`nama Pegawai : ${namaKaryawan}`);
  console.log(gajiHarian * totalAbsen);
};

totalGajiKaryawan("udin", 100000, 30);
