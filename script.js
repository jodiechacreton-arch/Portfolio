// Initialize EmailJS if available (some pages don't load the EmailJS SDK)
if (typeof window !== 'undefined' && window.emailjs && typeof window.emailjs.init === 'function') {
    try {
        emailjs.init({ publicKey: '7JT5eOoO4dWaFc1CH' });
    } catch (e) {
        console.warn('EmailJS init failed:', e);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm && window.emailjs && typeof window.emailjs.send === 'function') {
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
            }).then(function() {
                alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon!`);
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS error:', error);
            });
        });
    }

    // Bubble click handler
    const bubble = document.getElementById('bubbleBtn');
    if (bubble) {
        bubble.addEventListener('click', function() {
            triggerBubbleExplosion(bubble, 'about.html');
        });
        bubble.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                triggerBubbleExplosion(bubble, 'about.html');
            }
        });
    }

    function triggerBubbleExplosion(element, targetUrl) {
        if (window.__bubbleNavigating) return;
        window.__bubbleNavigating = true;
        const rect = element.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const colors = ['#f06ea6', '#ffd6e0', '#fff7f3', '#ffb6d5', '#ffd1e8'];

        for (let i = 0; i < 36; i++) {
            createParticle(cx, cy, colors[Math.floor(Math.random() * colors.length)]);
        }
        document.body.classList.add('zoom-out');
        setTimeout(function() {
            window.location.href = targetUrl;
        }, 700);
    }

    function createParticle(x, y, color) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.background = color;
        document.body.appendChild(p);
        const angle = Math.random() * Math.PI * 2;
        const dist = 80 + Math.random() * 220;
        const vx = Math.cos(angle) * dist;
        const vy = Math.sin(angle) * dist;
        const rot = Math.floor(Math.random() * 360);
        requestAnimationFrame(function() {
            p.style.transition = 'transform 700ms cubic-bezier(.2,.8,.2,1), opacity 700ms linear';
            p.style.transform = `translate(-50%, -50%) translate(${vx}px, ${vy}px) rotate(${rot + 720}deg)`;
            p.style.opacity = '0';
        });
        setTimeout(function() {
            p.remove();
        }, 800);
    }
});

