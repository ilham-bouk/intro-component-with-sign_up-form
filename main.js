let boxs = document.querySelectorAll(".box");
let fNameInp = document.querySelector(".fname input");
let lnameInp = document.querySelector(".lname input");
let emilInp = document.querySelector(".email input");
let passwordInp = document.querySelector(".password input");
let submit = document.querySelector("button");


submit.addEventListener('click', () => {
  const valid = validateEmail(emilInp.value);
  if (fNameInp.value === "") {
    errorInput(fNameInp);
  } else {
    chackError(fNameInp);
  }
  if (lnameInp.value === "") {
    errorInput(lnameInp);
  } else {
    chackError(lnameInp);
  }
  if (emilInp.value === "" || !valid) {
    errorInput(emilInp);
  } else {
    chackError(emilInp);
  }
  if (passwordInp.value.length < 8) {
    errorInput(passwordInp);
  } else {
    chackError(passwordInp);
  }
  if (fNameInp.value !== "" && lnameInp.value !== "" && valid && passwordInp.value.length >= 8) {
    fNameInp.value = "";
    lnameInp.value = "";
    emilInp.value = "";
    passwordInp.value = "";
  }
})

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function errorInput(input) {
  input.parentElement.classList.add("error");
  input.style.borderColor = "var(--primary-red)";
  input.style.color = "var(--primary-red)";
}

function chackError(input) {
  if (input.parentElement.classList.contains("error")) {
    input.parentElement.classList.remove("error");
    input.style.borderColor = "var(--grayish-blue)";
    input.style.color = "var(--dark-blue)";
  }
}

