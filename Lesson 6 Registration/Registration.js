const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const btn = document.querySelector("#submitBtn");

function inputField() {
  if (username.value && email.value && password.value) {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", "");
  }
}

username.addEventListener("input", inputField);

email.addEventListener("input", inputField);

password.addEventListener("input", inputField);

const users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newUser = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  const compare = users.find((u) => u.email == email.value && u.password == password.value)

  console.log("New user registered:", compare);
  alert(`Hi guys ${username.value}`);
});

