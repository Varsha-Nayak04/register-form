document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission to server

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;

        // Display the submitted data
        const resultHTML = `
            <h2>Registration Successful!</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
        `;
        resultDiv.innerHTML = resultHTML;

        // Clear the form
        form.reset();
    });
});
