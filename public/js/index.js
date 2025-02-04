import { checkCredentials } from "./auth/login.js";
import {
  isAdultAge,
  isSamePassword,
  isValidUsername,
  isValidPassword,
} from "./auth/validation.js";

const registerForm = document.querySelector("form.register");
const loginForm = document.querySelector("form.login");
const welcomePage = document.querySelector(".welcome");

if (registerForm) {
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = registerForm.querySelector("#username").value;
    const password = registerForm.querySelector("#password").value;
    const password2 = registerForm.querySelector("#repeat-password").value;
    const age = registerForm.querySelector("#age").value;

    if (
      isValidUsername(username) &&
      isValidPassword(password) &&
      isSamePassword(password, password2) &&
      isAdultAge(age)
    ) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      document.location.href = "/registered";
      return;
    }

    document.querySelector(".error").textContent = "Please check your data";
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = loginForm.querySelector("#username").value;
    const password = loginForm.querySelector("#password").value;

    if (checkCredentials(username, password)) {
      document.location.href = "/logged-in?name=" + username;
      return;
    }

    document.querySelector(".error").textContent = "Invalid credentials";
  });
}

if (welcomePage) {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");

  welcomePage.querySelector(".username").textContent = name;
}
