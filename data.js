const os = require('os');

// Số lõi CPU
const cpuCores = os.cpus().length;
document.querySelector(".ram p").innerHTML = cpuCores

// Dung lượng RAM (GB)
const ramGB = os.totalmem() / 1073741824;

// In thông tin ra console
console.log(`Số lõi CPU: ${cpuCores}`);
console.log(`Dung lượng RAM: ${ramGB} GB`);
