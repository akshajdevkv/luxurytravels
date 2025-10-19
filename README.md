# 🌟 Luxury Travels - Premium French Destinations

A modern, futuristic travel agency website showcasing the finest destinations in France. Built with pure HTML, CSS, and JavaScript featuring stunning parallax effects, smooth animations, and a responsive design.

![Luxury Travels](https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop)

## ✨ Features

- **Parallax Hero Section**: Stunning parallax scrolling effect on the homepage
- **Modern Gradients**: Beautiful linear gradients throughout the design
- **Smooth Animations**: Fade-in, slide-in, and zoom animations
- **Responsive Design**: Fully responsive and mobile-friendly
- **Interactive Forms**: Booking and contact forms with validation
- **Sticky Navigation**: Smooth scrolling navigation bar
- **Hover Effects**: Engaging hover animations on cards and buttons
- **Notification System**: Real-time feedback for user interactions

## 🏛️ Destinations Featured

- 🗼 Eiffel Tower, Paris
- 🏰 Mont Saint-Michel, Normandy
- 🌊 French Riviera, Côte d'Azur
- 🏰 Loire Valley Châteaux
- 🎨 Louvre Museum, Paris
- 🌸 Provence Lavender Fields

## 🚀 Quick Start

### Local Development

1. Clone this repository:
```bash
git clone https://github.com/yourusername/luxurytravels.git
cd luxurytravels
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Or simply open the file
open index.html
```

3. Visit `http://localhost:8000` in your browser

## 📦 Deployment to GitHub Pages

### Method 1: Direct Deployment (Recommended)

1. Create a new repository on GitHub named `luxurytravels` (or any name you prefer)

2. Initialize git and push your code:
```bash
git init
git add .
git commit -m "Initial commit: Luxury Travels website"
git branch -M main
git remote add origin https://github.com/yourusername/luxurytravels.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section (left sidebar)
   - Under **Source**, select `main` branch
   - Select `/root` folder
   - Click **Save**

4. Your site will be live at: `https://yourusername.github.io/luxurytravels/`

### Method 2: Using GitHub Desktop

1. Open GitHub Desktop
2. Click **File** → **Add Local Repository**
3. Select the `luxurytravels` folder
4. Click **Publish repository**
5. Follow steps 3-4 from Method 1

### Method 3: GitHub Web Interface

1. Go to [GitHub](https://github.com)
2. Click **New Repository**
3. Name it `luxurytravels`
4. Make it public
5. Upload all files via **Add file** → **Upload files**
6. Follow steps 3-4 from Method 1

## 📁 Project Structure

```
luxurytravels/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## 🎨 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Playfair Display & Poppins
- **Unsplash**: High-quality images

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎯 Key Sections

### 1. Hero Section
- Full-screen parallax background
- Animated title and subtitle
- Call-to-action button
- Scroll indicator animation

### 2. Destinations
- Grid layout with 6 featured destinations
- Hover effects with overlay transitions
- High-quality images from Unsplash

### 3. Booking Form
- Destination selector
- Date pickers with validation
- Traveler count
- Special requests textarea
- Form validation and feedback

### 4. About Section
- Company information
- Feature highlights with icons
- Side-by-side layout with image

### 5. Contact Section
- Contact information cards
- Interactive contact form
- Email validation
- Success/error notifications

### 6. Footer
- Quick links
- Social media links
- Newsletter subscription
- Copyright information

## 🛠️ Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f5576c;
}
```

### Changing Images

Replace image URLs in `index.html` with your own:

```html
<img src="your-image-url.jpg" alt="Description">
```

### Adding More Destinations

Copy a destination card in `index.html` and modify the content:

```html
<div class="destination-card" data-aos="fade-up">
    <div class="card-image">
        <img src="new-destination.jpg" alt="New Destination">
        <div class="card-overlay">
            <div class="card-content">
                <h3>New Destination</h3>
                <p>Location • Description</p>
                <a href="#booking" class="card-button">Explore Now</a>
            </div>
        </div>
    </div>
</div>
```

## 🐛 Troubleshooting

### Images not loading?
- Check your internet connection (images are loaded from Unsplash)
- Replace with local images if needed

### Parallax effect not working?
- Ensure JavaScript is enabled in your browser
- Check browser console for errors

### Forms not submitting?
- Forms currently show notifications only (no backend)
- Integrate with a backend service for actual submissions

## 🔮 Future Enhancements

- [ ] Backend integration for form submissions
- [ ] Real booking system with payment gateway
- [ ] Multi-language support
- [ ] Blog section for travel tips
- [ ] User authentication and accounts
- [ ] Booking history and management
- [ ] Interactive map integration
- [ ] Reviews and testimonials section
- [ ] Dark mode toggle
- [ ] PWA (Progressive Web App) support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Created with ❤️ by [Your Name]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with deployment, feel free to:

- Open an issue on GitHub
- Contact via email: your-email@example.com
- Visit our website: https://yourusername.github.io/luxurytravels/

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com)
- Inspiration from [Booking Holdings](https://www.bookingholdings.com)

---

⭐ Star this repository if you found it helpful!

**Live Demo**: [https://yourusername.github.io/luxurytravels/](https://yourusername.github.io/luxurytravels/)

