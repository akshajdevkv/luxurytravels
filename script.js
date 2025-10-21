// ===================================
// Smooth Scroll for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// ===================================
// Sticky Navbar with Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ===================================
// Mobile Menu Toggle
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ===================================
// Parallax Effect for Hero Section
// ===================================
const parallaxBg = document.querySelector('.parallax-bg');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ===================================
// Scroll Animations (AOS-like)
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
});

// ===================================
// Multi-Destination Selection Handling
// ===================================
const destinationCheckboxes = document.querySelectorAll('input[name="destinations"]');
const destinationCount = document.querySelector('.destination-count');

// Update destination count
function updateDestinationCount() {
    const selected = document.querySelectorAll('input[name="destinations"]:checked');
    const count = selected.length;
    destinationCount.textContent = `(${count} selected)`;
    
    // Add visual feedback
    if (count > 0) {
        destinationCount.style.color = 'var(--neon-cyan)';
    } else {
        destinationCount.style.color = 'rgba(255, 255, 255, 0.7)';
    }
}

// Listen for checkbox changes
destinationCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateDestinationCount);
});

// ===================================
// Booking Form Handling
// ===================================
const bookingForm = document.getElementById('booking-form');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get selected destinations
    const selectedDestinations = Array.from(document.querySelectorAll('input[name="destinations"]:checked'))
        .map(checkbox => checkbox.value);
    
    // Get form values
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const travelers = document.getElementById('travelers').value;
    const specialRequests = document.getElementById('special-requests').value;
    
    // Validate destinations
    if (selectedDestinations.length === 0) {
        showNotification('Please select at least one destination', 'error');
        return;
    }
    
    // Validate dates
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (checkinDate < today) {
        showNotification('Please select a check-in date in the future', 'error');
        return;
    }
    
    if (checkoutDate <= checkinDate) {
        showNotification('Check-out date must be after check-in date', 'error');
        return;
    }
    
    // Calculate trip duration
    const duration = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
    
    // Find matching packages
    const matchingPackages = findMatchingPackages(selectedDestinations, duration);
    
    // Simulate booking process
    showNotification('Searching for available packages...', 'info');
    
    setTimeout(() => {
        if (matchingPackages.length > 0) {
            const destNames = selectedDestinations.map(d => {
                const checkbox = document.querySelector(`input[value="${d}"]`);
                return checkbox.nextElementSibling.querySelector('.dest-name').textContent;
            });
            
            const message = selectedDestinations.length === 1 
                ? `Great choice! We found ${matchingPackages.length} amazing package(s) for ${destNames[0]}.`
                : `Wonderful! We found ${matchingPackages.length} multi-city package(s) covering ${destNames.join(', ')}.`;
            
            showNotification(message + ' A travel consultant will contact you shortly!', 'success');
            
            // Show recommended package
            if (matchingPackages.length > 0) {
                setTimeout(() => {
                    showNotification(`💎 Recommended: ${matchingPackages[0].name} - ${matchingPackages[0].price.display}`, 'info');
                }, 2500);
            }
        } else {
            showNotification('We\'ll create a custom package for your selected destinations. Our team will contact you within 24 hours!', 'success');
        }
        
        // Reset form
        bookingForm.reset();
        updateDestinationCount();
    }, 2000);
});

// ===================================
// Find Matching Packages
// ===================================
function findMatchingPackages(selectedDestinations, duration) {
    if (typeof travelPackages === 'undefined') return [];
    
    return travelPackages.filter(pkg => {
        // Check if package covers selected destinations
        const pkgDestinations = pkg.destinations.map(d => d.toLowerCase().replace(/\s+/g, '-'));
        const matchCount = selectedDestinations.filter(dest => {
            return pkgDestinations.some(pkgDest => 
                pkgDest.includes(dest) || dest.includes(pkgDest.split('-')[0])
            );
        }).length;
        
        // For multi-destination, require at least 50% match
        const matchPercentage = matchCount / selectedDestinations.length;
        const isMultiCity = selectedDestinations.length > 1;
        
        // Duration match (with 30% flexibility)
        const durationMatch = duration >= (pkg.duration.days * 0.7) && duration <= (pkg.duration.days * 1.3);
        
        if (isMultiCity) {
            return matchPercentage >= 0.5 && pkg.destination === 'multiple';
        } else {
            return matchCount > 0;
        }
    });
}

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate sending message
    showNotification('Sending your message...', 'info');
    
    setTimeout(() => {
        showNotification(`Thank you ${name}! We've received your message and will get back to you within 24 hours.`, 'success');
        contactForm.reset();
    }, 2000);
});

// ===================================
// Newsletter Form Handling
// ===================================
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    showNotification('Subscribing...', 'info');
    
    setTimeout(() => {
        showNotification('Successfully subscribed to our newsletter!', 'success');
        emailInput.value = '';
    }, 1500);
});

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                padding: 1.2rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                animation: slideInRight 0.4s ease;
                max-width: 400px;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            
            .notification i {
                font-size: 1.5rem;
            }
            
            .notification-success {
                border-left: 4px solid #28a745;
            }
            
            .notification-success i {
                color: #28a745;
            }
            
            .notification-error {
                border-left: 4px solid #dc3545;
            }
            
            .notification-error i {
                color: #dc3545;
            }
            
            .notification-info {
                border-left: 4px solid #667eea;
            }
            
            .notification-info i {
                color: #667eea;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
            
            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 5000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success':
            return 'fa-check-circle';
        case 'error':
            return 'fa-exclamation-circle';
        case 'info':
            return 'fa-info-circle';
        default:
            return 'fa-info-circle';
    }
}

// ===================================
// Add Hover Effects to Cards
// ===================================
const destinationCards = document.querySelectorAll('.destination-card');

destinationCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

// ===================================
// Set Minimum Date for Booking Form
// ===================================
const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');

if (checkinInput && checkoutInput) {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    checkinInput.setAttribute('min', today);
    checkoutInput.setAttribute('min', today);
    
    // Update checkout minimum when checkin changes
    checkinInput.addEventListener('change', () => {
        const checkinDate = new Date(checkinInput.value);
        checkinDate.setDate(checkinDate.getDate() + 1);
        const minCheckout = checkinDate.toISOString().split('T')[0];
        checkoutInput.setAttribute('min', minCheckout);
        
        // Reset checkout if it's before new minimum
        if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
            checkoutInput.value = '';
        }
    });
}

// ===================================
// Active Navigation Link Highlighting
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Add Active Class Style
// ===================================
const navLinkStyle = document.createElement('style');
navLinkStyle.textContent = `
    .nav-link.active {
        color: #667eea !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(navLinkStyle);

// ===================================
// Preload Images for Better Performance
// ===================================
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ===================================
// Add Loading Animation
// ===================================
window.addEventListener('load', () => {
    // Fade in animation for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
    
    // Trigger AOS animations for elements in viewport
    const elementsInView = document.querySelectorAll('[data-aos]');
    elementsInView.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('aos-animate');
        }
    });
});

// ===================================
// Render Travel Packages
// ===================================
function renderPackages() {
    const packagesGrid = document.getElementById('packages-grid');
    
    if (!packagesGrid || typeof travelPackages === 'undefined') {
        return;
    }
    
    packagesGrid.innerHTML = '';
    
    travelPackages.forEach((pkg, index) => {
        const packageCard = document.createElement('div');
        packageCard.className = 'package-card';
        packageCard.setAttribute('data-aos', 'fade-up');
        packageCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        // Generate stars
        const fullStars = Math.floor(pkg.rating);
        const hasHalfStar = pkg.rating % 1 !== 0;
        let starsHTML = '';
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        // Generate highlights (show first 4)
        const highlightsHTML = pkg.highlights.slice(0, 4).map(highlight => 
            `<div class="highlight-item">
                <i class="fas fa-check-circle"></i>
                <span>${highlight}</span>
            </div>`
        ).join('');
        
        // Determine badge class
        let badgeClass = '';
        if (pkg.badge === 'POPULAR') badgeClass = 'popular';
        else if (pkg.badge === 'BEST VALUE') badgeClass = 'best-value';
        else if (pkg.badge === 'LUXURY') badgeClass = 'luxury';
        
        // Multi-destination indicator
        const isMultiCity = pkg.destinations.length > 1;
        const multiCityBadge = isMultiCity ? '<span class="multi-city-badge"><i class="fas fa-route"></i> Multi-City</span>' : '';
        
        packageCard.innerHTML = `
            <span class="package-badge ${badgeClass}">${pkg.badge}</span>
            ${multiCityBadge}
            <div class="package-image">
                <img src="${pkg.image}" alt="${pkg.name}">
            </div>
            <div class="package-content">
                <div class="package-header">
                    <h3 class="package-title">${pkg.name}</h3>
                    <p class="package-tagline">${pkg.tagline}</p>
                </div>
                
                <div class="package-rating">
                    <div class="stars">${starsHTML}</div>
                    <span class="rating-text">${pkg.rating} (${pkg.reviews} reviews)</span>
                </div>
                
                <div class="package-details">
                    <div class="detail-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${pkg.duration.days} Days / ${pkg.duration.nights} Nights</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-map-marked-alt"></i>
                        <span class="destinations-list">${pkg.destinations.join(' → ')}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-hotel"></i>
                        <span>${pkg.hotel}</span>
                    </div>
                </div>
                
                <div class="package-highlights">
                    <h4>Package Highlights:</h4>
                    <div class="highlights-list">
                        ${highlightsHTML}
                    </div>
                </div>
                
                <div class="package-price">
                    <p class="price-label">Starting from</p>
                    <span class="price-amount">${pkg.price.display}</span>
                    <p class="price-duration">per person</p>
                    
                    <div class="package-buttons">
                        <button class="btn-primary" onclick="openPackageModal(${pkg.id})">View Details</button>
                        <a href="#booking" class="btn-secondary">Book Now</a>
                    </div>
                </div>
            </div>
        `;
        
        packagesGrid.appendChild(packageCard);
    });
    
    // Trigger AOS animations for newly added elements
    if (typeof observer !== 'undefined') {
        document.querySelectorAll('.package-card[data-aos]').forEach(element => {
            observer.observe(element);
        });
    }
}

// ===================================
// Package Modal Functionality
// ===================================
function openPackageModal(packageId) {
    const pkg = travelPackages.find(p => p.id === packageId);
    if (!pkg) return;
    
    // Remove existing modal if any
    const existingModal = document.querySelector('.package-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'package-modal active';
    
    // Generate included items
    const includedHTML = pkg.included.map(item => 
        `<li><i class="fas fa-check-circle" style="color: #28a745;"></i> ${item}</li>`
    ).join('');
    
    // Generate excluded items
    const excludedHTML = pkg.excluded.map(item => 
        `<li><i class="fas fa-times-circle"></i> ${item}</li>`
    ).join('');
    
    // Generate itinerary
    const itineraryHTML = pkg.itinerary.map(day => 
        `<div class="itinerary-item">
            <div class="itinerary-day">Day ${day.day}</div>
            <div class="itinerary-title">${day.title}</div>
            <div class="itinerary-description">${day.description}</div>
        </div>`
    ).join('');
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closePackageModal()">
                <i class="fas fa-times"></i>
            </button>
            
            <div class="modal-header">
                <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; margin-bottom: 0.5rem;">${pkg.name}</h2>
                <p style="font-size: 1.2rem; opacity: 0.9;">${pkg.tagline}</p>
                <div style="margin-top: 1.5rem; display: flex; gap: 2rem; flex-wrap: wrap;">
                    <div>
                        <i class="fas fa-calendar-alt"></i>
                        <span style="margin-left: 0.5rem;">${pkg.duration.label} (${pkg.duration.days} Days / ${pkg.duration.nights} Nights)</span>
                    </div>
                    <div>
                        <i class="fas fa-hotel"></i>
                        <span style="margin-left: 0.5rem;">${pkg.hotel}</span>
                    </div>
                    <div style="font-size: 1.5rem; font-weight: 700;">
                        <i class="fas fa-tag"></i>
                        <span style="margin-left: 0.5rem;">${pkg.price.display}</span>
                    </div>
                </div>
            </div>
            
            <div class="modal-body">
                <div class="modal-section">
                    <h3><i class="fas fa-route"></i> Detailed Itinerary</h3>
                    ${itineraryHTML}
                </div>
                
                <div class="modal-section">
                    <h3><i class="fas fa-check-circle"></i> What's Included</h3>
                    <ul class="included-list" style="list-style: none;">
                        ${includedHTML}
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h3><i class="fas fa-times-circle"></i> What's Not Included</h3>
                    <ul class="excluded-list" style="list-style: none;">
                        ${excludedHTML}
                    </ul>
                </div>
                
                <div class="modal-section" style="text-align: center; padding: 2rem; background: var(--bg-light); border-radius: 15px;">
                    <h3 style="margin-bottom: 1rem;">Ready to Book This Package?</h3>
                    <p style="margin-bottom: 1.5rem; color: #6c757d;">Contact us to customize this package or book now!</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <a href="#booking" class="btn-primary" onclick="closePackageModal()" style="display: inline-block;">Book Now</a>
                        <a href="#contact" class="btn-secondary" onclick="closePackageModal()" style="display: inline-block;">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closePackageModal();
        }
    });
}

function closePackageModal() {
    const modal = document.querySelector('.package-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePackageModal();
    }
});

// Initialize packages on page load
document.addEventListener('DOMContentLoaded', () => {
    renderPackages();
});

// Also render immediately if DOM is already loaded
if (document.readyState === 'loading') {
    // Do nothing, DOMContentLoaded will handle it
} else {
    // DOM is already ready
    renderPackages();
}

// ===================================
// Console Welcome Message
// ===================================
console.log('%c🌟 Welcome to Luxury Travels! 🌟', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cExplore the finest destinations in France with us!', 'color: #764ba2; font-size: 14px;');

