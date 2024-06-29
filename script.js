function sendMail() {
    let parms = {
        name: document.getElementById("form-contact-name").value,
        email: document.getElementById("form-contact-email").value,
        subject: document.getElementById("form-contact-subject").value,
        message: document.getElementById("form-contact-message").value,
    };

    emailjs.send("service_2w1o3su", "template_ppgl2uk", parms)
        .then(function(response) {
            Swal.fire({
                icon: 'success',
                title: 'Email Sent Successfully!',
                showConfirmButton: false,
                timer: 1500
            });
            document.getElementById("form-contact").reset(); // Reset the form fields
        })
        .catch(function(error) {
            Swal.fire({
                icon: 'error',
                title: 'Failed to send email',
                text: JSON.stringify(error),
                showConfirmButton: true
            });
        });
}
