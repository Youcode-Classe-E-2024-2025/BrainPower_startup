// Select the form
const form = document.querySelector(".signUp-form form");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = form.querySelector('input[placeholder="Name"]').value.trim();
  const lastName = form.querySelector('input[placeholder="Last Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Email"]').value.trim();
  const password = form.querySelector('input[placeholder="Password"]').value.trim();

  // Validate form data
  if (!name || !lastName || !email || !password) {
    alert("All fields are required.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  // Save data to local storage
  const userData = { name, lastName, email, password };
  localStorage.setItem("signUpData", JSON.stringify(userData));

  alert("Form submitted successfully!");
  form.reset(); // Clear the form
});

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
