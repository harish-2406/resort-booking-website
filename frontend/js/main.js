// Main JavaScript for Glow Residency

const API_URL = 'http://localhost:5000/api';

// Load sample rooms
function loadRooms() {
  const roomsContainer = document.getElementById('roomsContainer');
  const rooms = [
    {
      id: 1,
      name: 'Deluxe Room',
      price: '₹3,000',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
      guests: 2,
      beds: 1,
      amenities: ['AC', 'WiFi']
    },
    {
      id: 2,
      name: 'Pool View Room',
      price: '₹4,500',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
      guests: 2,
      beds: 1,
      amenities: ['AC', 'WiFi', 'Pool View']
    },
    {
      id: 3,
      name: 'Family Suite',
      price: '₹6,000',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
      guests: 4,
      beds: 2,
      amenities: ['AC', 'WiFi', 'Kitchen']
    }
  ];

  roomsContainer.innerHTML = rooms.map(room => `
    <div class="col-md-4 mb-4">
      <div class="room-card">
        <img src="${room.image}" alt="${room.name}" class="room-image">
        <div class="room-body">
          <h4 class="room-title">${room.name}</h4>
          <p class="room-price">${room.price}/night</p>
          <div class="room-features">
            <span><i class="fas fa-users"></i> ${room.guests} guests</span>
            <span><i class="fas fa-bed"></i> ${room.beds} bed</span>
            <span><i class="fas fa-snowflake"></i> AC</span>
            <span><i class="fas fa-wifi"></i> WiFi</span>
          </div>
          <button class="room-btn" onclick="bookRoom(${room.id})">BOOK NOW</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Load sample reviews
function loadReviews() {
  const reviewsContainer = document.getElementById('reviewsContainer');
  const reviews = [
    {
      name: 'Rahul Sharma',
      avatar: 'https://i.pravatar.cc/50?img=1',
      rating: 5,
      text: 'Amazing experience! The staff was so friendly and the rooms were awesome. The poolside area is beautiful.'
    },
    {
      name: 'Priya Mehta',
      avatar: 'https://i.pravatar.cc/50?img=2',
      rating: 5,
      text: 'Perfect place to relax and unwind. The ambiance is very peaceful and the food was delicious.'
    },
    {
      name: 'Vikram Singh',
      avatar: 'https://i.pravatar.cc/50?img=3',
      rating: 5,
      text: 'One of the best resorts in Auroville. Highly recommended for family and couples.'
    }
  ];

  reviewsContainer.innerHTML = reviews.map(review => `
    <div class="col-md-4 mb-4">
      <div class="review-card">
        <p class="review-text">"${review.text}"</p>
        <div class="review-header">
          <img src="${review.avatar}" alt="${review.name}" class="review-avatar">
          <div>
            <p class="review-author">${review.name}</p>
            <div class="review-stars">${'⭐'.repeat(review.rating)} (${review.rating}/5)</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Load gallery
function loadGallery() {
  const galleryContainer = document.getElementById('galleryContainer');
  const images = [
    'https://images.unsplash.com/photo-1576518527997-b8bc06273010?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1509027923253-d8e8d724fc33?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1571508601166-c8f96a4a6d4f?w=400&h=300&fit=crop'
  ];

  galleryContainer.innerHTML = images.map(image => `
    <div class="col-md-4 col-lg-2 mb-3">
      <div class="gallery-item">
        <img src="${image}" alt="Gallery" class="gallery-image">
      </div>
    </div>
  `).join('');
}

// Book room
function bookRoom(roomId) {
  const checkIn = document.getElementById('checkIn').value;
  const checkOut = document.getElementById('checkOut').value;
  
  if (!checkIn || !checkOut) {
    alert('Please select check-in and check-out dates');
    return;
  }
  
  window.location.href = `booking.html?roomId=${roomId}&checkIn=${checkIn}&checkOut=${checkOut}`;
}

// Search availability
function searchAvailability() {
  const checkIn = document.getElementById('checkIn').value;
  const checkOut = document.getElementById('checkOut').value;
  
  if (!checkIn || !checkOut) {
    alert('Please select dates');
    return;
  }
  
  alert(`Searching for rooms from ${checkIn} to ${checkOut}`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  loadRooms();
  loadReviews();
  loadGallery();
  checkAuth();
});

// Check authentication
function checkAuth() {
  const token = localStorage.getItem('token');
  const authNav = document.getElementById('authNav');
  
  if (token && authNav) {
    authNav.innerHTML = `
      <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
          <i class="fas fa-user"></i> My Account
        </a>
        <ul class="dropdown-menu dropdown-menu-dark">
          <li><a class="dropdown-item" href="dashboard.html">Dashboard</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#" onclick="logout()">Logout</a></li>
        </ul>
      </div>
    `;
  }
}

// Logout
function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = 'index.html';
}
