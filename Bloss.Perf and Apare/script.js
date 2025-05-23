// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navIcons = document.querySelector('.nav-icons');

    // Create mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    const menuContent = document.createElement('div');
    menuContent.className = 'mobile-menu-content';
    mobileMenu.appendChild(menuContent);
    document.body.appendChild(mobileMenu);

    // Clone navigation elements
    const linksClone = navLinks.cloneNode(true);
    const iconsClone = navIcons.cloneNode(true);
    menuContent.appendChild(linksClone);
    menuContent.appendChild(iconsClone);

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Close mobile menu when clicking a link
    const mobileLinks = menuContent.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.remove();
                hamburger.classList.remove('active');
            }
        }
    });
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.product-card button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product-card');
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('.price').textContent;
        
        // Show notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = `${productName} added to cart!`;
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you for subscribing!';
    newsletterForm.appendChild(successMessage);
    
    // Clear form
    newsletterForm.reset();
    
    // Remove success message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});

// Add CSS for notifications and mobile menu
const style = document.createElement('style');
style.textContent = `
    .mobile-menu {
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        background-color: white;
        padding: 2rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 999;
    }
    
    .mobile-menu a {
        display: block;
        padding: 1rem 0;
        text-decoration: none;
        color: #333;
    }
    
    .mobile-menu i {
        display: block;
        padding: 1rem 0;
        color: #333;
    }
    
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #DC143C;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        animation: slideIn 0.3s ease-out;
    }
    
    .success-message {
        color: #28a745;
        margin-top: 1rem;
        text-align: center;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Scroll to top button
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑';
scrollButton.className = 'scroll-top';
document.body.appendChild(scrollButton);

// Add CSS for scroll to top button
const scrollButtonStyle = document.createElement('style');
scrollButtonStyle.textContent = `
    .scroll-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background-color: #DC143C;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        font-size: 1.5rem;
        z-index: 1000;
    }
    
    .scroll-top:hover {
        background-color: #b01030;
    }
`;
document.head.appendChild(scrollButtonStyle);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Scroll to top functionality
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});

// Close mobile menu when window is resized
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
}); 