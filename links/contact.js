const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  // Check if the form is valid based on the 'required' attributes
  if (!form.checkValidity()) {
    // If not valid, browser shows default error messages
    event.preventDefault();
  } else {
    // If valid, prevent default form action and redirect manually
    event.preventDefault();
    alert("Thanks for contacting JenAuto! Redirecting to Home...");
    window.location.href = "../index.html";
  }
});
