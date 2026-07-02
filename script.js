// Initialize EmailJS if available (some pages don't load the EmailJS SDK)
if (typeof window !== 'undefined' && window.emailjs && typeof window.emailjs.init === 'function') {
    try {
        emailjs.init({ publicKey: '7JT5eOoO4dWaFc1CH' });
    } catch (e) {
        console.warn('EmailJS init failed:', e);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm && window.emailjs && typeof window.emailjs.send === 'function') {
        contactForm.addEventListener('submit', function (e) {
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
            }).then(function () {
                alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon!`);
                contactForm.reset();
            }, function (error) {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS error:', error);
            });
        });
    }

});

// Audio Implementation
const sound = new Audio("./Audio.m4a");
const hoverBox = document.getElementById("mushroom");

hoverBox.addEventListener("mouseenter", () => {
    sound.currentTime = 0;
    sound.play().catch(err => console.log(err));
});

hoverBox.addEventListener("mouseleave", () => {
    sound.pause();
    sound.currentTime = 0;
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
