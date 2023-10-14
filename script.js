<script>
    // Initialize cart count
    let cartCount = 0;

    // Function to update the cart count
    function updateCartCount() {
        document.getElementById("cart-count").textContent = cartCount;
    }

    // Click event for the "Add to Cart" button
    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            // Prevent the default behavior of the anchor tag
            event.preventDefault();

            cartCount++;
            updateCartCount();
        });
    });
</script>
