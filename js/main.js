document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registrationForm");

  if (registrationForm) {
    registrationForm.addEventListener("submit", (e) => {
      const name = document.getElementById("studentName").value.trim();
      const programme = document.getElementById("programme").value.trim();
      const serial = document.getElementById("serialNumber").value.trim();

      if (!name || !programme || !serial) {
        alert("Please fill in all fields.");
        e.preventDefault();
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // === REGISTRATION FORM HANDLING ===
  const registrationForm = document.getElementById("registrationForm");

  if (registrationForm) {
    registrationForm.addEventListener("submit", (e) => {
      const name = document.getElementById("studentName").value.trim();
      const programme = document.getElementById("programme").value;
      const serial = document.getElementById("serialNumber").value.trim();

      if (!name || !programme || !serial) {
        alert("Please fill in all fields.");
        e.preventDefault();
        return;
      }

      if (isNaN(serial)) {
        alert("Serial Number must be a number.");
        e.preventDefault();
        return;
      }

      alert("Registration submitted successfully!");
    });
  }

  // === FEEDBACK FORM HANDLING ===
  const feedbackForm = document.getElementById("feedbackForm");

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      const name = document.getElementById("feedbackName").value.trim();
      const email = document.getElementById("feedbackEmail").value.trim();
      const message = document.getElementById("feedbackMessage").value.trim();

      if (!name || !email || !message) {
        alert("Please complete all fields in the feedback form.");
        e.preventDefault();
        return;
      }

      if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
      }

      alert("Feedback submitted! Thank you.");
    });
  }

  // === Smooth Scrolling for Anchor Links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
