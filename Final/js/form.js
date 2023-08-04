document.getElementById("register").addEventListener("click", validateForm);
document.getElementById("clear").addEventListener("click", clearForm);

function validateForm() {
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var propertyType = document.getElementById("property-type").value;
  var bedrooms = parseInt(document.getElementById("bedrooms").value);
  var bathrooms = parseInt(document.getElementById("bathrooms").value);
  var priceRange = document.getElementById("price-range").value;
  // var comments = document.getElementById("comments").value;

  // Regular expression patterns for validation
  var namePattern = /^[a-zA-Z]+$/;
  var phonePattern = /^[0-9]{10}$/;
  var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!firstName) {
    alert("First name is required.");
    return false;
  }

  if (!namePattern.test(firstName)) {
    alert("First name should contain only letters.");
    return false;
  }

  if (!lastName) {
    alert("Last name is required.");
    return false;
  }

  if (!namePattern.test(lastName)) {
    alert("Last name should contain only letters.");
    return false;
  }

  if (!phone) {
    alert("Phone number is required.");
    return false;
  }

  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  if (!email) {
    alert("Email is required.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Email must be a valid email address.");
    return false;
  }

  if (!phone) {
    alert("Phone number is required.");
    return false;
  }

  if (propertyType !== "house" && propertyType !== "condominium") {
    alert("Please select a valid property type.");
    return false;
  }

  if (!bedrooms || bedrooms < 1) {
    alert("Please enter a valid number of bedrooms.");
    return false;
  }

  if (!bathrooms || bathrooms < 1) {
    alert("Please enter a valid number of bathrooms.");
    return false;
  }

  if (!priceRange) {
    alert("Price range is required.");
    return false;
  }

  alert("Registered Successfully!");
  return true;
}

function clearForm() {
  document.getElementById("form").reset();
}
