// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.btn-add');
    let cartCount = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            updateCartCount();
            alert('Item added to cart!');
        });
    });
    
    function updateCartCount() {
        const cartElements = document.querySelectorAll('.btn-cart');
        cartElements.forEach(element => {
            element.textContent = `🛒 Cart (${cartCount})`;
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle (placeholder for future enhancement)
    console.log('Pet Haven SG website loaded successfully!');
});