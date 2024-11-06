const btn = document.querySelector(".btn-message");

document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.textContent = "Sending...";

    const serviceID = "service_q4tptpm";
    const templateID = "template_l89ab3e";

    emailjs
      .sendForm(serviceID, templateID, this)
      .then(() => {
        btn.textContent = "Send Message";
        alert("Message sent successfully!");
      })
      .catch((err) => {
        btn.textContent = "Send Message";
        alert("Failed to send message: " + JSON.stringify(err));
      });
  });