# 🎟️ GOTICK — Event Ticketing Platform

GOTICK is a web-based event ticketing platform that allows users to browse, search, and book tickets for a variety of live events — including Singing Shows, Garba Nights, Movies, and Travel Trips (India & Abroad).

---

## 🚀 Features

- 🔍 **Real-time Search** — Instantly filter artists and events as you type
- 🎭 **Category-based Navigation** — Browse events by category: Singing Shows, Movies, Garba Nights, Trips (India), Trips (Abroad)
- 🎤 **Artist Profiles** — View featured artists with event details, songs, and achievements
- 🎫 **Ticket Booking** — Double-click any artist card to open a booking panel with ticket quantity and price calculation
- 🛒 **Checkout Flow** — Seamless checkout with order summary
- 💾 **Session Persistence** — Booking details (artist, event, ticket count, total) saved via `localStorage`
- 👤 **User Registration & Profile** — Register to access your profile and personalized experience
- 📱 **Mobile-First Responsive Design** — Built with CSS Grid and Flexbox for all screen sizes
- 🌙 **Dark Theme UI** — Sleek dark-themed interface with smooth animations

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, CSS Grid, Flexbox, animations |
| JavaScript (ES6) | Core logic and DOM interactions |
| jQuery 3.6.0 | Simplified DOM manipulation and event handling |
| Font Awesome 6 | Icons throughout the UI |
| LocalStorage API | Client-side session and booking persistence |

---

## 📁 Project Structure

```
gotick/
├── home.html           # Landing page with About and Upcoming Events
├── gotick.html         # Singing Shows — main ticketing page
├── gn.html             # Garba Nights category page
├── m1.html             # Movies category page
├── m2.html             # Trips (India) category page
├── m3.html             # Trips (Abroad) category page
├── checkout.html       # Checkout and order summary page
├── registration.html   # User registration page
├── profile.html        # User profile page
├── main.js             # Core JavaScript / jQuery logic
├── style.css           # Global styles
└── img/                # Artist and event images
```

---

## ⚙️ Getting Started

Since this is a pure front-end project with no build tools or dependencies, you can run it directly in your browser.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/gotick.git
cd gotick
```

### 2. Open in Browser

Simply open `home.html` in your browser:

```bash
# On macOS
open home.html

# On Linux
xdg-open home.html

# On Windows
start home.html
```

> No server setup, npm install, or build step required.

---

## 📖 How to Use

1. **Register** — Open `registration.html` and create your account to access the platform.
2. **Browse Events** — Navigate to any category from the sidebar (Singing Shows, Garba Nights, etc.).
3. **Search** — Use the search bar to find artists or events by name or location.
4. **Book Tickets** — Double-click on any artist card to open the booking panel. Select the number of tickets and click **Book Tickets**.
5. **Checkout** — You'll be redirected to the checkout page with your order details pre-filled from `localStorage`.

---

## 🎨 Pages Overview

| Page | Description |
|---|---|
| `home.html` | Welcome landing page with About Us and Upcoming Events |
| `gotick.html` | Browse and book tickets for Singing Shows |
| `gn.html` | Garba Nights events with featured folk artists |
| `m1.html` | Movie screenings and events |
| `m2.html` | Domestic travel trips across India |
| `m3.html` | International travel trips abroad |
| `checkout.html` | Final booking summary and checkout |
| `registration.html` | New user registration form |
| `profile.html` | Registered user profile view |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve GOTICK:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 👥 Team

Developed by a 4-member team as part of a web development project (Mar 2025 – Apr 2025).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> 🎵 *"Music connects hearts, events create memories!"* — GOTICK
