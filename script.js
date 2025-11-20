// Smooth scroll animation
const sections = document.querySelectorAll('.fade-in');

function revealSections() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
revealSections();


// Contact form handler (NO EMAIL SENDING)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received.`);
    document.getElementById('contactForm').reset(); // reset form
  } else {
    alert('Please fill all fields!');
  }
});


// Navigation Active Highlight
const links = document.querySelectorAll("#navLinks a");

links.forEach(link => {
  link.addEventListener("click", function () {
    links.forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});
