"use strict";

// variable
const clock = document.getElementById("MyClockDisplay");

window.addEventListener("load", function () {
  setInterval(() => {
    const data = new Date();
    const session = data.getHours > 12 ? "PM" : "AM";
    clock.textContent = `${(data.getHours() + "").padStart(2, 0)}:${(
      data.getMinutes() + ""
    ).padStart(2, 0)}:${(data.getSeconds() + "").padStart(2, 0)} ${session}`;
  }, 1000);
});
