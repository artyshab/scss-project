const navShow = document.querySelector(".nav-show-wrapper");
const navBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

navBtn.addEventListener("click", () => {
  navShow.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  navShow.classList.remove("show");
});

const menuBtn = document.querySelectorAll(".menu-button");
const login = document.querySelector(".login-wrapper");
const overlay = document.querySelector(".overlay");
const bodyOverfill = document.querySelector(".body");

menuBtn.forEach((element) => {
  element.addEventListener("click", () => {
    const loginValue = element.value; // value of the clicked button
    bodyOverfill.classList.add("overflow");
    overlay.classList.add("overlay-show");
    if (loginValue === "login") {
      login.classList.add("login-show");
      login.innerHTML = `<div class="login">
                        <p>Log in</p>
                        <label for="username">Username:</label>
                        <input type="text" name="username" id="input-field" placeholder="Enter username....">
                        <label for="email">Password:</label>
                        <input type="text" name="password" id="input-field" placeholder="Enter password....">
                        <button>Submit</button>
                    </div>`;
    } else if (loginValue === "signin") {
      login.classList.add("login-show");
      login.innerHTML = `<div class="login">
                        <p>Sign in</p>
                        <label for="username">Name:</label>
                        <input type="text" name="name" id="input-field" placeholder="Enter your name....">
                        <label for="username">Surname:</label>
                        <input type="text" name="surname" id="input-field" placeholder="Enter surname....">
                        <label for="email">Email:</label>
                        <input type="text" name="email" id="input-field" placeholder="Enter your email....">
                        <label for="email">Password:</label>
                        <input type="text" name="password" id="input-field" placeholder="Enter password....">
                        <button>Submit</button>
                    </div>`;
    }
  });
});


overlay.addEventListener("click", () => {
    overlay.classList.remove("overlay-show");
    login.classList.remove("login-show");
    bodyOverfill.classList.remove("overflow");
});




