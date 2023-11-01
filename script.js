function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
    const cart = [];
    let cartCount = 0;
    let isAddingItem = false;
    let addItemInterval;

    function toggleCartMenu() {
        const cartMenu = document.getElementById('cart-menu');
        isCartMenuOpen = !isCartMenuOpen;
        cartMenu.style.display = isCartMenuOpen ? 'block' : 'none';
    }

    function startAddingItem(itemId, price) {
        isAddingItem = true;
        addItemToCart(itemId, price); // Add the item when the button is first pressed
        addItemInterval = setInterval(() => {
            if (isAddingItem) {
                addItemToCart(itemId, price); // Add the item repeatedly as long as the button is held down
            }
        }, 500); // You can adjust the interval as needed
    }

    function stopAddingItem() {
        isAddingItem = false;
        clearInterval(addItemInterval);
    }

    function addItemToCart(itemId, price) {
        cart.push({ id: itemId, price });
        cartCount++;
        updateCartAmount();
    }

    function removeItemFromCart(itemId, price) {
        const itemInCartIndex = cart.findIndex(cartItem => cartItem.id === itemId);
        if (itemInCartIndex !== -1) {
            cart.splice(itemInCartIndex, 1);
            cartCount--;
            updateCartAmount();
        }
    }

    function updateCartAmount() {
      const cartAmount = document.getElementById('cart-amount');
        cartAmount.textContent = cartCount.toString();
    
    }
    document.addEventListener("DOMContentLoaded", function () {
        var navbar = document.getElementById("navbar-links");
        var menuButton = document.getElementById("menu-button");
        var closeButton = document.getElementById("close-button");
    
        menuButton.addEventListener("click", function () {
            navbar.classList.toggle("active");
            closeButton.style.display = "block";
        });
    
        closeButton.addEventListener("click", function () {
            navbar.classList.remove("active");
            closeButton.style.display = "none";
        });
    
        // Close the navbar when a link is clicked
        var navLinks = navbar.getElementsByTagName("a");
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", function () {
                navbar.classList.remove("active");
                closeButton.style.display = "none";
            });
        }
    });
    
