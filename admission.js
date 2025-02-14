document
  .getElementById("admissionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    fetch("APPSCRIPT_URL", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(object),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        alert("Form submitted successfully!");
        document.getElementById("admissionForm").reset();
      })
      .catch((error) => console.error("Error:", error));
  });
