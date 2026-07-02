
// Initialize EmailJS so the website can send emails directly
// from the contact form. If initialization fails, an error
// message is logged to the console.
if (typeof window !== 'undefined' && window.emailjs && typeof window.emailjs.init === 'function') {
    try {
        emailjs.init({ publicKey: '7JT5eOoO4dWaFc1CH' });
    } catch (e) {
        console.warn('EmailJS init failed:', e);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    
    // Wait until the webpage has fully loaded before accessing
    // the contact form and adding event listeners.
    // Get the contact form and check that EmailJS is available

    const contactForm = document.getElementById('contactForm');
    if (contactForm && window.emailjs && typeof window.emailjs.send === 'function') {
   
    // Listen for when the user submits the contact form
    contactForm.addEventListener('submit', function (e) {
    
    // Prevent the page from refreshing after submission
            e.preventDefault();

    // Collect the user's input from each form field

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

    // Send the form information using EmailJS

            emailjs.send('service_ccpla8u', 'template_4q23zft', {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            }).then(function () {

    // Display a success message and clear the form

                alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon!`);
                contactForm.reset();
            }, function (error) {
            
    // Notify the user if the email could not be sent

                alert('Failed to send message. Please try again.');
                console.error('EmailJS error:', error);
            });
        });
    }

});

// Audio Implementation
// Load the audio file
const sound = new Audio("./Audio.m4a");
// Select the image with the id "mushroom"
const hoverBox = document.getElementById("mushroom");
// Play the audio when the mouse enters the image
hoverBox.addEventListener("mouseenter", () => {
    sound.currentTime = 0; // Restart the audio from the beginning
    sound.play().catch(err => console.log(err)); // there if is an error in playing the audio, it will be logged to the console
});

hoverBox.addEventListener("mouseleave", () => {
    sound.pause();  // Stop the audio
    sound.currentTime = 0; // Reset it to the beginning
});


// let startBtn = document.getElementsByClassName("start-btn")[0];
let startBtn = document.querySelector(".start-btn");
let skillsBtn = document.querySelector(".skills-btn");
let goalsBtn = document.querySelector(".goals-btn");
let skill = document.querySelector(".skill");

let returnBtn = document.querySelector(".return-btn");
let returnBtn2 = document.querySelector(".return-btn2");


let opening = document.querySelector(".opening");
let aboutMe = document.querySelector(".page-shell");

let goals = document.querySelector(".goals");


startBtn.addEventListener("click", function() {
   window.location.href = "about.html";
});

skillsBtn.addEventListener('click', function(){
    opening.style.display = "none";
    skill.style.display = "block";
});


returnBtn.addEventListener('click', function(){
    skill.style.display = "none";
    opening.style.display = "block";
});

goalsBtn.addEventListener('click', function(){
    opening.style.display = "none";
    goals.style.display = "block";
});

returnBtn2.addEventListener('click', function(){
    goals.style.display = "none";
    opening.style.display = "block";
});
