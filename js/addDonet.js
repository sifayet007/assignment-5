// hero section 1
document
  .getElementById("donation-add-button")
  .addEventListener("click", function () {
    const addMoney = getInputValueById("donation-input-money");
    const donationBalance = getTextValueById("donation-balance");
    const donateNowBtn = document.getElementById("my_modal_1");

    const donationAccountBalance = getTextValueById("donation-account-balance");
    if (isNaN(addMoney)) {
      alert("Failed to donation");
      donateNowBtn.classList.add("hidden");
      return;
    }
    const newBalance = addMoney + donationBalance;
    const donationNewBalance = donationAccountBalance - addMoney;
    document.getElementById("donation-balance").innerText = newBalance;
    document.getElementById("donation-account-balance").innerText =
      donationNewBalance;
    const div = document.createElement("div");
    const date = new Date();
    div.innerHTML = `
      <div class="border-2 p-4 rounded-2xl border-[#EDEDED]  mt-3">
      <p >${addMoney} Taka is Donated for famine-2024 at Quota, Bangladesh
     </p> <p> ${date}
      </p></div>
      
      `;
    document.getElementById("history-container").appendChild(div);
  });

document
  .getElementById("feni-donation-button")
  .addEventListener("click", function () {
    const addMoney = getInputValueById("feni-add-donation-money");
    const donationBalance = getTextValueById("feni-donation-balance");
    const donateNowBtn = document.getElementById("my_modal_2");
    const donationAccountBalance = getTextValueById("donation-account-balance");
    if (isNaN(addMoney)) {
      alert("Failed to donation");
      donateNowBtn.classList.add("hidden");
      return;
    }
    const newBalance = addMoney + donationBalance;
    const donationNewBalance = donationAccountBalance - addMoney;
    document.getElementById("feni-donation-balance").innerText = newBalance;
    document.getElementById("donation-account-balance").innerText =
      donationNewBalance;
    const div = document.createElement("div");
    const date = new Date();
    div.innerHTML = `
      <div class="border-2 p-4 rounded-2xl border-[#EDEDED]  mt-3">
      <p >${addMoney} Taka is Donated for famine-2024 at Quota, Bangladesh
     </p> <p> ${date}
      </p></div>
      
      `;
    document.getElementById("history-container").appendChild(div);
  });

document
  .getElementById("quota-donation-button")
  .addEventListener("click", function () {
    const addMoney = getInputValueById("quota-donation-balance");
    const donationBalance = getTextValueById("quota-add-balance");

    const donationAccountBalance = getTextValueById("donation-account-balance");
    const donateNowBtn = document.getElementById("my_modal_3");
    if (isNaN(addMoney)) {
      alert("Failed to donation");
      donateNowBtn.classList.add("hidden");
      return;
    }

    const newBalance = addMoney + donationBalance;
    const donationNewBalance = donationAccountBalance - addMoney;
    document.getElementById("quota-add-balance").innerText = newBalance;
    document.getElementById("donation-account-balance").innerText =
      donationNewBalance;
    const div = document.createElement("div");

    const date = new Date();
    div.innerHTML = `
      <div class="border-2 p-4 rounded-2xl border-[#EDEDED]  mt-3">
      <p >${addMoney} Taka is Donated for famine-2024 at Quota, Bangladesh
     </p> <p> ${date}
      </p></div>
      
      `;
    document.getElementById("history-container").appendChild(div);
  });

// donate and history button
document.getElementById("donation").addEventListener("click", function () {
  showSection("donation-section");
});
document.getElementById("history").addEventListener("click", function () {
  showSection("history-section");
});
