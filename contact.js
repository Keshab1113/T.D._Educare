import { config } from "./config.js";
(() => {
  emailjs.init(config.EMAILJS_USER_ID);
})();

const form = document.getElementById("contactForm");
const statusDiv = document.getElementById("status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const username = formData.get("username");
  const email = formData.get("email");
  const mobileNumber = formData.get("mobileNumber");
  const gender = formData.get("gender");
  const courses = formData.get("courses");

  const templateParams = {
    from_username: username,
    from_email: email,
    from_mobileNumber: mobileNumber,
    from_gender: gender,
    from_courses: courses,
  };

  emailjs
    .send(
      config.EMAILJS_SERVICE_ID,
      config.EMAILJS_TEMPLATE_ID,
      templateParams,
      config.EMAILJS_USER_ID
    )
    .then(
      (response) => {
        alert("Message Sent");
        form.reset();
        console.log(response);
      },
      (error) => {
        console.log(error);
        alert("Error sending message. Please try again.");
      }
    );
});
