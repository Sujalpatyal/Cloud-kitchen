let users = [];
let cart = [];
function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (users.find(user => user.username === username)) {
        alert('Username already exists!');
        return;
    }
    users.push({ username, password });
    alert('User registered successfully!');
    document.getElementById('auth-form').reset();
}

function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        alert('Login successful!');
        document.getElementById('auth-form').reset();
    } else {
        alert('Invalid username or password.');
    }
}
function addToCart(item, price) {
    const existingItem = cart.find(cartItem => cartItem.item === item);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ item, price, quantity: 1 });
    }
    updateCart();
}

// Remove Item from Cart
function removeFromCart(item) {
    cart = cart.filter(cartItem => cartItem.item !== item);
    updateCart();
}
function updateItemQuantity(item, action) {
    const cartItem = cart.find(cartItem => cartItem.item === item);
    
    if (cartItem) {
        if (action === 'increase') {
            cartItem.quantity++;
        } else if (action === 'decrease' && cartItem.quantity > 1) {
            cartItem.quantity--;
        }
    }
    updateCart();
}
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(cartItem => {
        const li = document.createElement('li');
        total += cartItem.price * cartItem.quantity;
        li.innerHTML = `
            ${cartItem.item} - ₹${(cartItem.price).toFixed(2)} (x${cartItem.quantity}) 
            <button onclick="updateItemQuantity('${cartItem.item}', 'increase')">+</button>
            <button onclick="updateItemQuantity('${cartItem.item}', 'decrease')">-</button>
            <button onclick="removeFromCart('${cartItem.item}')">Remove</button>
        `;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = `₹${total.toFixed(2)}`;
    document.getElementById('item-count').textContent = `Items in Cart: ${cart.length}`;
}
function searchMenu() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        item.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
}
function checkout() {
    const address = document.getElementById('address').value;
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    if (address.trim() === '') {
        alert('Please enter a delivery address.');
        return;
    }
    alert(`Order placed successfully!\nDelivery Address: ${address}`);
    cart = [];
    updateCart();
    document.getElementById('address').value = '';
}
function clearCart() {
    cart = [];
    updateCart();
}function openCheckoutModal() {
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;
if (cart.length === 0) {
        alert('Your cart is empty!');
        return; }
    if (address.trim() === '') {
        alert('Please enter a delivery address!');
        return;
    }
    document.getElementById('modal-address').textContent = address;
    document.getElementById('modal-payment-method').textContent = paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1).replace('-', ' ');
    
    const modalItemsList = document.getElementById('modal-items');
    modalItemsList.innerHTML = '';
    cart.forEach(cartItem => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - ₹${(cartItem.price).toFixed(2)} (x${cartItem.quantity})`;
        modalItemsList.appendChild(li);
    });
    let total = 0;
    cart.forEach(cartItem => {
        total += cartItem.price * cartItem.quantity;
    });
    document.getElementById('modal-total-price').textContent = `Total: ₹${total.toFixed(2)}`;

    // Display the modal
    document.getElementById('checkout-modal').style.display = 'flex';
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

function confirmOrder() {
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment-method').value;
    
    // After confirming the order, clear the cart and show a success message
    alert(`Order placed successfully!\nDelivery Address: ${address}\nPayment Method: ${paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1).replace('-', ' ')}`);
    
    // Clear the cart and reset UI
    cart = [];
    updateCart();
    document.getElementById('address').value = '';
    document.getElementById('payment-method').value = 'cod';
    
    // Close the modal
    closeCheckoutModal();
}

function clearCart() {
    cart = [];
    updateCart();
}

// ca3.js
function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate input
    if (!username || !password) {
        alert('Please fill in both fields');
        return;
    }

    // Simulate registration (you'd normally send this to your server)
    console.log('Registering user:', username, password);
    alert('Registration successful!');
}

function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate input
    if (!username || !password) {
        alert('Please fill in both fields');
        return;
    }

    // Simulate login (you'd normally authenticate this against a server)
    console.log('Logging in user:', username, password);
    alert('Login successful!');
}
// ca3.js
function toggleForm(formType) {
    if (formType === 'signup') {
        document.getElementById('sign-in-form').style.display = 'none';
        document.getElementById('sign-up-form').style.display = 'block';
    } else if (formType === 'signin') {
        document.getElementById('sign-in-form').style.display = 'block';
        document.getElementById('sign-up-form').style.display = 'none';
    }
}

function signInUser() {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;


    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }
    console.log('Signing in:', username, password);
    alert('Sign In Successful!');
}

function signUpUser() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    if (!username || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    console.log('Signing up:', username, password);
    alert('Sign Up Successful!');
}
