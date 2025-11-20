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


// Contact form handler
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    try {
      const res = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      const data = await res.json();

      if (data.success) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contactForm').reset();
      } else {
        alert("Message sending failed! Please try again.");
      }
    } catch (error) {
      alert("Server error! Check if your backend is running.");
    }
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
