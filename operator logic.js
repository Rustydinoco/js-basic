//operator logic ad 3:
// && = and
// || = or
// !  = not

//berguna untuk mempersingkat nested if//

// && //
let role = "striker"; //nilainya harus true semua//
let age = "angga";

if (role === "striker" && age === "angga") {
  console.log("valid");
}

//contoh dalam nested if//
const password = prompt("isi password");

if (password.length >= 5 && password.indexOf(" ") === -1) {
  console.log("Valid");
} else {
  console.log("Tidak Valid");
}

// || //
let panjang = "120 cm"; //nilainya boleh salah satunya false//

if (panjang === "120 cm" || panjang === "130cm") {
  console.log("pas panjangnya");
}

// ! //

const makanan = "rawon"; //kebalikan dari === //

if (makanan !== "rawon") {
  //artinya jika makanananya tidak sama dengan rawon maka itu 'gak enak//
  console.log("gak enak");
} else {
  console.log("enak");
}
