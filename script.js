const form = document.querySelector("form");
const error = document.querySelector(".error");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const inputs = document.querySelectorAll("input");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

function showError() {
  if (!checkPassword()) error.textContent = "Passwords don't match";
  else if (firstName.validity.valueMissing)
    error.textContent = "You need to enter a name";
  else if (lastName.validity.valueMissing)
    error.textContent = "You need to enter a last name";
  else if (email.validity.valueMissing)
    error.textContent = "You need to enter an e-mail address.";
  else if (email.validity.typeMismatch)
    error.textContent = "Entered value needs to be an e-mail address.";
  else if (phone.validity.valueMissing)
    error.textContent = "You need to enter a name";
  else if (phone.validity.patternMismatch)
    error.textContent = "You need to a valid phone number";
  else if (phone.validity.tooShort)
    error.textContent = "Phone number too short";
  else if (password.validity.valueMissing)
    error.textContent = "You need to enter a password.";
  else if (confirmPassword.validity.valueMissing)
    error.textContent = "You need to confirm password.";
}

function checkPassword() {
  const password1 = form.password.value;
  const password2 = form.confirmPassword.value;

  if (password1 !== password2) {
    // eslint-disable-next-line no-alert
    // alert("\nPassword did not match: Please try again...");
    return false;
  }

  return true;
}

inputs.forEach((elem) => {
  elem.addEventListener("input", () => {
    if (elem.validity.valid) {
      error.textContent = "";
      // error.className = "error";
    } else showError();
  });
});

form.addEventListener("submit", (e) => {
  inputs.forEach((elem) => {
    if (!elem.validity.valid) {
      showError();
      e.preventDefault();
    } else if (!checkPassword()) {
      showError();
      e.preventDefault();
    }
  });
});
