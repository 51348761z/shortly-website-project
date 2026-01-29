// For handling form submission and URL validation
const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

linkForm.addEventListener("submit", formSubmit);

function validURL(string) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i",
  ); // fragment locator
  return !!pattern.test(string);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    errMsg.textContent = "Please enter something";
    input.classList.add("border-red");
  } else if (!validURL(input.value)) {
    errMsg.textContent = "Please enter a valid URL";
    input.classList.add("border-red");
  } else {
    errMsg.textContent = "";
    input.classList.remove("border-red");
    // Submit the form or perform desired actions
    console.log("Form submitted with URL:", input.value);
  }
}

// For handling mobile menu toggle
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
