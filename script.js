// Basic interactivity: mobile nav, USSD demo, contact form handling
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }
});

// Simple USSD simulation
function simulateMenu(){
  const menu = document.getElementById('ussdMenu');
  if(!menu) return;
  menu.innerHTML = '<div class="menu-item">Receiving alert... Flood risk: HIGH</div><div class="menu-item">1. View safe routes</div><div class="menu-item">2. Contact local office</div>';
}

// Contact form (demo only)
function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');
  if(!name || !email || !message){
    feedback.textContent = 'Please fill all fields.';
    return false;
  }
  // Demo: show success (in a real site post to backend)
  feedback.textContent = 'Thanks ' + name + '. Your message has been received. We will contact you shortly.';
  document.getElementById('contactForm').reset();
  return false;
}