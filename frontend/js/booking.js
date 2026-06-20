const API_URL = 'http://localhost:5000/api';

document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  loadBookingDetails();
});

function checkAuth() {
  const token = localStorage.getItem('token');
  if (!token) window.location.href = 'login.html';
}

function loadBookingDetails() {
  const params = new URLSearchParams(window.location.search);
  const checkIn = params.get('checkIn');
  const checkOut = params.get('checkOut');

  if (checkIn) document.getElementById('checkIn').value = checkIn;
  if (checkOut) document.getElementById('checkOut').value = checkOut;

  loadUserData();
}

async function loadUserData() {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/auth/me`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    const data = await response.json();
    if (data.success) {
      document.getElementById('firstName').value = data.user.firstName;
      document.getElementById('lastName').value = data.user.lastName;
      document.getElementById('email').value = data.user.email;
      document.getElementById('phone').value = data.user.phone || '';
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    showToast('Booking submitted successfully!', 'success');
    setTimeout(() => window.location.href = 'index.html', 1500);
  });
}

function showToast(message, type = 'info') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x`;
  alertDiv.style.zIndex = '9999';
  alertDiv.style.marginTop = '20px';
  alertDiv.innerHTML = `${message}<button type="button" class="btn-close" data-bs-dismiss="alert"></button>`;
  document.body.appendChild(alertDiv);
  setTimeout(() => alertDiv.remove(), 5000);
}
