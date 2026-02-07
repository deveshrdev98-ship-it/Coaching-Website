function studentLogin() {
  const id = document.getElementById("student").value;
  const pass = document.getElementById("password").value;

  if (id === "student" && pass === "1234") {
    localStorage.setItem("studentLogin", "true");
    window.location.href = "student-dashboard.html";
  } else {
    alert("Invalid Student ID or Password");
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "student-login.html";
}
