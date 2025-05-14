function validateLogin(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (!name || !email || !password) {
      alert("Please fill in all fields!");
      event.preventDefault();
    } else {
      localStorage.setItem("kidzoUser", name);
    }
  }
  
  function displayWelcome() {
    const name = localStorage.getItem("kidzoUser");
    if (name) {
      document.getElementById("welcome").textContent = `Welcome, ${name}!`;
    }
  }
  