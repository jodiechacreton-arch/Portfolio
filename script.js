// Initialize EmailJS
emailjs.init({ publicKey: '7JT5eOoO4dWaFc1CH' });

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            emailjs.send('service_ccpla8u', 'template_4q23zft', {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            }).then(function(response) {
                alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon!`);
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS error:', error);
            });
        });
    }
});

console.log('Contact form and EmailJS initialized');
