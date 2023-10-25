const pacarSaya = ["agnes", "dira", "dasi", "dasa"];

for (let pacar of pacarSaya) {
  console.log(pacar);
}

for (let pacar in pacarSaya) {
  console.log(pacar);
}

pacarSaya.forEach((pacar, index) => {
  console.log(pacar, index + 1);
});

pacarSaya.map((pacar, index) => {
  console.log(pacar, index + 1);
});
