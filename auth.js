// Signup Function
function signup() {
  let email = document.getElementById("signup-email").value.trim().toLowerCase();
  let password = document.getElementById("signup-password").value.trim();
  let message = document.getElementById("signup-message");

  if (email === "" || password === "") {
      message.style.color = "red";
      message.innerText = "Email and password cannot be empty!";
      return;
  }

  if (localStorage.getItem(email)) {
      message.style.color = "red";
      message.innerText = "User already exists!";
  } else {
      localStorage.setItem(email, password);
      message.style.color = "green";
      message.innerText = "Signup successful! Redirecting...";
      setTimeout(() => window.location.href = "login.html", 2000);
  }
}

// Login Function
function login() {
  let email = document.getElementById("login-email").value.trim().toLowerCase();
  let password = document.getElementById("login-password").value.trim();
  let message = document.getElementById("login-message");

  if (email === "" || password === "") {
      message.style.color = "red";
      message.innerText = "Email and password cannot be empty!";
      return;
  }

  let storedPassword = localStorage.getItem(email);

  if (storedPassword && storedPassword === password) {
      message.style.color = "green";
      message.innerText = "Login successful! Redirecting...";
      setTimeout(() => window.location.href = "index.html", 2000);
  } else {
      message.style.color = "red";
      message.innerText = "Invalid email or password!";
  }
}
