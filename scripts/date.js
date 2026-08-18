const today = new Date();

const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();

const date = `${day}/${month}/${year}`;

document.getElementById("date").textContent = date;