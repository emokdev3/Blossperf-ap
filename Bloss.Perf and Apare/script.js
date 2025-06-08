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

    // Toggle mobile menu
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

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
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

// Pagination configuration
const itemsPerPage = 6; // Number of items to show per page
const sections = ['apparel', 'brooches', 'necklaces', 'perfumes'];

// Initialize pagination for all sections
document.addEventListener('DOMContentLoaded', () => {
    sections.forEach(section => {
        initializePagination(section);
    });
});

function initializePagination(section) {
    const grid = document.getElementById(`${section}-grid`);
    const items = grid.getElementsByClassName('product-card');
    const totalPages = Math.ceil(items.length / itemsPerPage);
    
    // Store total pages in a data attribute
    grid.dataset.totalPages = totalPages;
    
    // Show first page
    showPage(section, 1);
}

function showPage(section, pageNumber) {
    const grid = document.getElementById(`${section}-grid`);
    const items = grid.getElementsByClassName('product-card');
    const totalPages = parseInt(grid.dataset.totalPages);
    
    // Update current page display
    document.getElementById(`${section}-current-page`).textContent = pageNumber;
    
    // Hide all items
    Array.from(items).forEach(item => {
        item.style.display = 'none';
    });
    
    // Show items for current page
    const start = (pageNumber - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, items.length);
    
    for (let i = start; i < end; i++) {
        items[i].style.display = 'block';
    }
    
    // Update button states
    const prevBtn = document.querySelector(`#${section}-pagination .pagination-btn:first-child`);
    const nextBtn = document.querySelector(`#${section}-pagination .pagination-btn:last-child`);
    
    prevBtn.disabled = pageNumber === 1;
    nextBtn.disabled = pageNumber === totalPages;
}

function changePage(section, direction) {
    const grid = document.getElementById(`${section}-grid`);
    const currentPage = parseInt(document.getElementById(`${section}-current-page`).textContent);
    const totalPages = parseInt(grid.dataset.totalPages);
    
    let newPage = currentPage;
    if (direction === 'next' && currentPage < totalPages) {
        newPage = currentPage + 1;
    } else if (direction === 'prev' && currentPage > 1) {
        newPage = currentPage - 1;
    }
    
    showPage(section, newPage);
    
    // Smooth scroll to the section
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}

// Cart functionality
let cart = [];
let wishlist = [];

// DOM Elements
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const wishlistModal = document.getElementById('wishlist-modal');
const wishlistItems = document.getElementById('wishlist-items');
const quickViewModal = document.getElementById('quick-view-modal');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Cart button click
    cartButton.addEventListener('click', () => {
        cartModal.style.display = 'block';
        updateCartDisplay();
    });

    // Search functionality
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) cartModal.style.display = 'none';
        if (e.target === wishlistModal) wishlistModal.style.display = 'none';
        if (e.target === quickViewModal) quickViewModal.style.display = 'none';
    });

    // Close buttons
    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', () => {
            cartModal.style.display = 'none';
            wishlistModal.style.display = 'none';
            quickViewModal.style.display = 'none';
        });
    });

    // Initialize wishlist buttons
    document.querySelectorAll('.wishlist-button').forEach(button => {
        button.addEventListener('click', toggleWishlist);
    });

    // Initialize quick view
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.wishlist-button') && !e.target.closest('.whatsapp-button')) {
                showQuickView(card);
            }
        });
    });
});

// Search functionality
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        const description = product.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Cart functionality
function addToCart(product) {
    cart.push(product);
    updateCartCount();
    updateCartDisplay();
}

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>${item.price}</p>
            </div>
            <button onclick="removeFromCart(${index})" class="remove-button">×</button>
        `;
        cartItems.appendChild(cartItem);
        total += parseFloat(item.price.replace('₵', ''));
    });

    cartTotalPrice.textContent = `₵${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartDisplay();
}

// Wishlist functionality
function toggleWishlist(e) {
    const button = e.currentTarget;
    const productId = button.dataset.productId;
    const product = button.closest('.product-card');
    
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        button.querySelector('i').className = 'far fa-heart';
    } else {
        wishlist.push(productId);
        button.querySelector('i').className = 'fas fa-heart';
    }
    
    updateWishlistDisplay();
}

function updateWishlistDisplay() {
    wishlistItems.innerHTML = '';
    wishlist.forEach(productId => {
        const product = document.querySelector(`[data-product-id="${productId}"]`).closest('.product-card');
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        wishlistItem.innerHTML = `
            <img src="${product.querySelector('img').src}" alt="${product.querySelector('h3').textContent}">
            <div class="wishlist-item-details">
                <h4>${product.querySelector('h3').textContent}</h4>
                <p>${product.querySelector('.price').textContent}</p>
            </div>
            <button onclick="removeFromWishlist('${productId}')" class="remove-button">×</button>
        `;
        wishlistItems.appendChild(wishlistItem);
    });
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(id => id !== productId);
    const button = document.querySelector(`[data-product-id="${productId}"]`);
    button.querySelector('i').className = 'far fa-heart';
    updateWishlistDisplay();
}

// Quick View functionality
function showQuickView(productCard) {
    const title = productCard.querySelector('h3').textContent;
    const description = productCard.querySelector('p').textContent;
    const price = productCard.querySelector('.price').textContent;
    const image = productCard.querySelector('img').src;
    const whatsappLink = productCard.querySelector('.whatsapp-button').href;

    document.getElementById('quick-view-title').textContent = title;
    document.getElementById('quick-view-description').textContent = description;
    document.getElementById('quick-view-price').textContent = price;
    document.getElementById('quick-view-img').src = image;
    document.getElementById('quick-view-whatsapp').href = whatsappLink;

    quickViewModal.style.display = 'block';
}

// Pagination functionality
function changePage(section, direction) {
    const grid = document.getElementById(`${section}-grid`);
    const currentPage = parseInt(document.getElementById(`${section}-current-page`).textContent);
    const itemsPerPage = 8;
    const items = grid.querySelectorAll('.product-card');
    const totalPages = Math.ceil(items.length / itemsPerPage);

    let newPage = direction === 'next' ? currentPage + 1 : currentPage - 1;
    if (newPage < 1) newPage = totalPages;
    if (newPage > totalPages) newPage = 1;

    document.getElementById(`${section}-current-page`).textContent = newPage;

    items.forEach((item, index) => {
        const start = (newPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        item.style.display = index >= start && index < end ? 'block' : 'none';
    });
}

// Initialize pagination
document.addEventListener('DOMContentLoaded', () => {
    ['apparel', 'brooches', 'necklaces', 'perfumes'].forEach(section => {
        changePage(section, 'next');
    });
}); 