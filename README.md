# Glow Residency - Luxury Resort Booking Website

A premium, full-featured resort booking platform with luxury design, built with Node.js, Express, MongoDB, and modern frontend technologies.

## 🌟 Features

✨ **Luxury Design**
- Premium golden/dark color scheme
- Modern responsive layout
- Beautiful imagery and gallery
- Smooth animations and transitions

🏨 **Resort Management**
- Browse multiple resorts
- View detailed room information
- Real-time availability checking
- Amenities showcase

📅 **Booking System**
- Easy date selection
- Guest count management
- Price calculation
- Secure payment processing

👤 **User Management**
- User registration and authentication
- Booking history
- Profile management
- Special requests

⭐ **Reviews & Ratings**
- Guest reviews
- Star ratings
- Photo uploads
- Rating system

## 💻 Tech Stack

**Frontend:**
- HTML5
- CSS3 with custom styling
- JavaScript (Vanilla)
- Bootstrap 5
- FontAwesome Icons

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stripe Payments

## 📁 Project Structure

```
resort-booking-website/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Resort.js
│   │   ├── Room.js
│   │   ├── Booking.js
│   │   └── Review.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── resorts.js
│   │   ├── bookings.js
│   │   ├── rooms.js
│   │   └── reviews.js
│   ├── middleware/
│   │   └── auth.js
│   ├── .env.example
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── auth.js
│   │   └── booking.js
│   ├── images/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   └── booking.html
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or MongoDB Atlas)
- npm or yarn
- Python 3 (for frontend server)

### Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/glow-residency
JWT_SECRET=your_super_secret_jwt_key_change_this
STRIPE_SECRET_KEY=sk_test_your_stripe_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
NODE_ENV=development
FRONTEND_URL=http://localhost:8000
```

Start the server:
```bash
npm start
# or for development with auto-reload
npm run dev
```

Server runs on: **http://localhost:5000**

### Frontend Setup

```bash
cd frontend

# Using Python
python -m http.server 8000

# or using Node.js http-server
npx http-server -p 8000
```

Access at: **http://localhost:8000**

## 📚 API Documentation

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires auth)

### Resorts
- `GET /api/resorts` - Get all resorts
- `GET /api/resorts/:id` - Get resort details
- `POST /api/resorts` - Create resort (admin only)
- `PUT /api/resorts/:id` - Update resort (admin only)
- `DELETE /api/resorts/:id` - Delete resort (admin only)

### Rooms
- `GET /api/rooms/resort/:resortId` - Get rooms by resort
- `POST /api/rooms/:id/check-availability` - Check room availability
- `POST /api/rooms` - Create room (admin only)

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/:id` - Get booking details
- `DELETE /api/bookings/:id` - Cancel booking

### Reviews
- `POST /api/reviews` - Create review
- `GET /api/reviews/resort/:resortId` - Get resort reviews

## 🎨 Customization

### Change Colors
Edit `frontend/css/style.css`:
```css
:root {
  --gold: #D4AF37;        /* Primary color */
  --dark: #1A1A1A;        /* Background color */
  --light: #F5F5F5;       /* Light background */
  --text: #333;           /* Text color */
  --border: #DDD;         /* Border color */
}
```

### Change Resort Name
Edit `frontend/index.html`:
```html
<span class="brand-text">YOUR RESORT NAME</span>
```

### Change Rooms
Edit `frontend/js/main.js` - `loadRooms()` function

### Change Images
Replace image URLs in frontend files

## 🔐 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/glow-residency
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable
NODE_ENV=development
FRONTEND_URL=http://localhost:8000
```

## 📦 Dependencies

### Backend
- express
- mongoose
- dotenv
- jsonwebtoken
- bcryptjs
- cors
- stripe
- express-validator

### Frontend
- Bootstrap 5
- FontAwesome Icons
- Vanilla JavaScript

## 🌐 Deployment

### Deploy Backend
1. **Heroku**
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

2. **AWS/DigitalOcean**
   - Set up server
   - Install Node.js
   - Clone repository
   - Install dependencies
   - Set environment variables
   - Start server

### Deploy Frontend
1. **Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Connect GitHub repository
   - Select frontend folder
   - Deploy

3. **GitHub Pages**
   - Enable GitHub Pages
   - Deploy frontend

## 🐛 Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check connection string in .env
- Use MongoDB Atlas for cloud database

### Port Already in Use
```bash
# Change port in .env
PORT=5001
```

### CORS Issues
- Check CORS configuration in backend
- Ensure frontend URL matches FRONTEND_URL in .env

## 📝 License

MIT License

## 📞 Support

For support, email: support@glowresidency.com

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ✨ Future Features

- [ ] Mobile app (React Native)
- [ ] Admin dashboard
- [ ] Advanced search filters
- [ ] Email notifications
- [ ] SMS alerts
- [ ] Multi-language support
- [ ] Loyalty program
- [ ] Gift cards
