(() => {
  emailjs.init(EMAILJS_USER_ID);
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
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_USER_ID
    )
    .then(
      (response) => {
        alert("Message Sent");
        form.reset();
      },
      (error) => {
        alert("Error sending message. Please try again.");
      }
    );
});
