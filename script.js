// === Chart.js Portfolio Chart ===
const ctx = document.getElementById('portfolioChart').getContext('2d');
const portfolioChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Q1 2022', 'Q3 2022', 'Q1 2023', 'Q4 2023', 'Q2 2024'],
    datasets: [{
      label: 'Portfolio Value (£)',
      data: [120000, 160000, 210000, 250000, 300000],
      borderColor: '#4caf50',
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

// === Counter Animation ===
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 25);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Start counter on scroll
let countersStarted = false;
window.addEventListener('scroll', () => {
  const statsSection = document.querySelector('.stats');
  const statsTop = statsSection.getBoundingClientRect().top;
  if (!countersStarted && statsTop < window.innerHeight) {
    animateCounters();
    countersStarted = true;
  }
});

// === Testimonial Slider ===
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
  testimonials.forEach(t => t.classList.remove('active'));
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add('active');
}
setInterval(showNextTestimonial, 5000);

// === Dark Mode Toggle ===
document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
