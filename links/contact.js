const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  // Check if the form is valid based on the 'required' attributes

  const formData = new FormData(form);
  const userName = formData.get("Fullname");

  event.preventDefault();
  if (!form.checkValidity()) {
    alert(`${userName} make sure to fill the form properly`);
  } else {
    alert(
      `Thank you, ${userName} for contacting JenAuto! Redirecting to Home...`,
    );
    window.location.href = "../index.html";
  }
});
