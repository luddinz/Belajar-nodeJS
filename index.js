console.log("Hi Mom!");

const os = require("os");
console.log("Free Memory:", os.freemem());

const luasSegitiga = require("./segitiga");
console.log(luasSegitiga(3, 4));
