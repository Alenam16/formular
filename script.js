"use strict";

const ticketSelect = document.querySelector("#ticket-select");
const quantitySelect = document.querySelector("#quantity-select");
const returnTicketSelect = document.querySelector("#returnticket-checkbox");
const classSelect = document.getElementsByName("travelclass");
const budgetText = document.querySelector("#budget-text");
const priceShow = document.querySelector("#total-price");
const chcekBudget = document.querySelector("#checkbudget-button");
const messageText = document.querySelector("#message-textarea");
const regex = /^[^!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?]*$/;

let totalPrice,
  a = [];
let i = 0;
function CalculateTotalPrice() {
  for (let i = 0; i < classSelect.length; i++) {
    if (classSelect[i].checked) {
      totalPrice =
        ticketSelect.value * quantitySelect.value * classSelect[i].value;
      break;
    }
  }
  if (returnTicketSelect.checked) {
    totalPrice *= 2;
  }
  priceShow.textContent = totalPrice;
}

CalculateTotalPrice();
messageText.value = null;

document.addEventListener("click", CalculateTotalPrice);
chcekBudget.addEventListener("click", function () {
  parseInt(budgetText.value) >= totalPrice
    ? alert("Váš rozpočet je v pořádku.")
    : alert("Nemáte dostatečný rozpočet.");
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("message-textarea").addEventListener("input", (e) => {
    // Povolíme písmena, číslice, mezery a české znaky s diakritikou

    let filteredValue = "";

    const allowedChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ.,";

    for (let i = 0; i < e.target.value.length; i++) {
      let char = e.target.value[i];

      if (allowedChars.includes(char)) {
        filteredValue += char;
      }
    }

    // Nastavíme filtrovanou hodnotu zpět do inputu

    e.target.value = filteredValue;
  });
});
