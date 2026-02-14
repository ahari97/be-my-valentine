var CORRECT_PASSWORD = "20042026";

var passwordScreen = document.getElementById("password-screen");
var passwordInput = document.getElementById("password-input");
var passwordError = document.getElementById("password-error");
var passwordSubmit = document.getElementById("password-submit");

var mainContent = document.getElementById("main-content");
var yesBtn = document.getElementById("yes-btn");
var noBtn = document.getElementById("no-btn");
var tryAgain = document.getElementById("try-again");
var buttons = document.getElementById("buttons");

var termsMessage = document.getElementById("terms-message");
var acceptTermsBtn = document.getElementById("accept-terms-btn");
var rejectTermsBtn = document.getElementById("reject-terms-btn");

var errorPopup = document.getElementById("error-popup");
var closePopupBtn = document.getElementById("close-popup-btn");

var termsSection = document.getElementById("terms-section");
var agreeToggles = document.querySelectorAll(".agree-toggle");
var completeBtn = document.getElementById("complete-btn");

var finalMessage = document.getElementById("final-message");

function show(el) {
  el.classList.remove("hidden");
}
function hide(el) {
  el.classList.add("hidden");
}

function showOnly(visibleEl) {
  hide(passwordScreen);
  hide(mainContent);
  hide(termsMessage);
  hide(termsSection);
  hide(finalMessage);
  show(visibleEl);
}

// ---------- 1. Password ----------
passwordSubmit.addEventListener("click", function () {
  if (passwordInput.value === CORRECT_PASSWORD) {
    hide(passwordScreen);
    show(mainContent);
    passwordError.classList.add("hidden");
    passwordInput.value = "";
  } else {
    show(passwordError);
  }
});

passwordInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") passwordSubmit.click();
});

// ---------- 2. Yes / No on main page ----------
yesBtn.addEventListener("click", function () {
  showOnly(termsMessage);
});

noBtn.addEventListener("click", function () {
  tryAgain.classList.remove("hidden");
});

// ---------- 3. Terms: "Yes I am ready" vs "Ummmmm" ----------
acceptTermsBtn.addEventListener("click", function () {
  showOnly(termsSection);
  updateCompleteButton();
});

rejectTermsBtn.addEventListener("click", function () {
  show(errorPopup);
});

closePopupBtn.addEventListener("click", function () {
  hide(errorPopup);
});

// ---------- 4. All 6 toggles must be checked to enable Complete ----------
function allAgreed() {
  for (var i = 0; i < agreeToggles.length; i++) {
    if (!agreeToggles[i].checked) return false;
  }
  return true;
}

function updateCompleteButton() {
  completeBtn.disabled = !allAgreed();
}

agreeToggles.forEach(function (toggle) {
  toggle.addEventListener("change", updateCompleteButton);
});

completeBtn.addEventListener("click", function () {
  if (allAgreed()) {
    showOnly(finalMessage);
  }
});
