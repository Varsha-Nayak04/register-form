$(document).ready(function() {
    // Handle form submission
    $("#registrationForm").submit(function(event) {
        event.preventDefault();  // Prevent form from submitting normally

        // Get form data
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var address = $("#address").val();

        // Send data via AJAX to the PHP script
        $.ajax({
            url: "submit.php",
            method: "POST",
            data: {
                name: name,
                email: email,
                phone: phone,
                address: address
            },
            success: function(response) {
                // Display the response (success message)
                $("#result").html(response);
            }
        });
    });
});
