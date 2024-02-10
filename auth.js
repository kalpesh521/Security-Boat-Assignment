document.getElementById("loginForm").addEventListener("submit", customerLogin);
document
  .getElementById("ownerLoginForm")
  .addEventListener("submit", ownerLogin);

// Customer Login
function customerLogin(event) {
  event.preventDefault();
  const email = document.getElementById("customerEmail").value;
  const password = document.getElementById("customerPassword").value;

  if (email === "customer@example.com" && password === "password") {
    window.location.href = "customer_dashboard.html";
  } else {
    document.getElementById("customerError").textContent =
      "Invalid email or password";
  }
}

//Owner login
function ownerLogin(event) {
  event.preventDefault();
  const email = document.getElementById("ownerEmail").value;
  const password = document.getElementById("ownerPassword").value;

  if (email === "owner@example.com" && password === "password") {
    window.location.href = "owner_dashboard.html";
  } else {
    document.getElementById("ownerError").textContent =
      "Invalid email or password";
  }
}
