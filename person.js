const fs = require("fs");

// Cara menulis coding 1
function createPerson(data) {
  fs.writeFileSync("./person.json", JSON.stringify(data));
}

createPerson({
  nama: "Muhammad Fariz Luddin",
  alamat: "Tangerang Selatan",
  pekerjaan: "IT",
});

// Cara menulis coding 2
fs.writeFileSync(
  "./person.json",
  JSON.stringify({
    nama: "Muhammad Fariz Luddin",
    alamat: "Tangerang Selatan",
    pekerjaan: "IT",
  })
);
