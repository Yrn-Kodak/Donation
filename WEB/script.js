// Typewriter Effect for Hero Heading
const typewriterElement = document.getElementById('typewriter');
const text = 'Hope for All Charity';
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typewriterElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150);  // Adjust speed by modifying the timeout
  }
}

window.onload = typeWriter;

// Lightbox functionality for gallery images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// Open lightbox when image is clicked
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = item.src;
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Donation Form Submission
const donationForm = document.getElementById('donation-form');
const thanksMsg = document.getElementById('thanks-msg');
const popup = document.getElementById('popup');
const popupCloseBtn = document.querySelector('.close-btn');

donationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simulate a successful donation (in a real scenario, you can submit to a server here)
  setTimeout(() => {
    // Show thanks message
    thanksMsg.style.display = 'block';

    // Display popup
    popup.style.display = 'block';

    // Reset form
    donationForm.reset();

    // Update donation progress
    updateDonationProgress(10000);  // Example amount, update dynamically as needed
  }, 500);
});

// Close popup
popupCloseBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Donation Progress Bar Update
let donationAmount = 0;
const progressBar = document.getElementById('progress-bar');
const donationAmountDisplay = document.getElementById('donation-amount');
const donationGoal = 50000;  // Set your donation goal

function updateDonationProgress(amount) {
  donationAmount += amount;
  const percentage = (donationAmount / donationGoal) * 100;
  progressBar.style.width = `${Math.min(percentage, 100)}%`;  // Ensure the bar doesn't go beyond 100%
  donationAmountDisplay.innerText = `$${donationAmount.toLocaleString()}`;
}

// Simulate reaching the goal dynamically (This can be used for real-time updates)
setInterval(() => {
  if (donationAmount < donationGoal) {
    updateDonationProgress(500);  // Add $500 every interval (this can be replaced by server data)
  }
}, 3000);

// Social Media Sharing - Replace with your URL
const socialLinks = document.querySelectorAll('.social-button a');
socialLinks.forEach((link) => {
  link.href = link.href.replace('YOUR_URL', window.location.href);
});
