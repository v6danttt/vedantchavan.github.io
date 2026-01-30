/* 3D CARD */
const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 20;
  const y = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

document.addEventListener("mouseleave", () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
});

/* PROFILE PIC CLICK - SHOW CONTACT MODAL */
const profilePic = document.getElementById("profilePic");
const contactModal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close");

profilePic.addEventListener("click", () => {
  contactModal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  contactModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});

/* SKILL ANIMATION ON SCROLL */
const skillItems = document.querySelectorAll(".skill-item");
const skillSpans = document.querySelectorAll(".skill");

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }, index * 100);
    }
  });
});

skillItems.forEach(skill => observer.observe(skill));
skillSpans.forEach(skill => observer.observe(skill));

/* CONTACT FORM SUBMISSION */
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  // Create mailto link with pre-filled information
  const subject = encodeURIComponent(`New Message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:vedantchavan@example.com?subject=${subject}&body=${body}`;
  
  // Show success message
  successMessage.style.display = "block";
  contactForm.style.display = "none";
  
  // Reset form
  contactForm.reset();
  
  // Hide success message after 3 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
    contactForm.style.display = "flex";
  }, 3000);
});
