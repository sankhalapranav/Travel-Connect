let users = [];
let currentUser  = null;

document.getElementById('registration-form')?.onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('reg-message').innerText = "Passwords do not match!";
        return;
    }

    users.push({ email, password });
    document.getElementById('reg-message').innerText = "Registration successful!";
    this.reset();
};

document.getElementById('login-form')?.onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser  = user;
        document.getElementById('login-message').innerText = "Login successful!";
        this.reset();
    } else {
        document.getElementById('login-message').innerText = "Invalid email or password!";
    }
};

document.getElementById('profile-form')?.onsubmit = function(event) {
    event.preventDefault();
    if (!currentUser ) {
        document.getElementById('profile-message').innerText = "You must be logged in to update your profile.";
        return;
    }
    const name = document.getElementById('profile-name').value;
    const bio = document.getElementById('profile-bio').value;

    // Here you would typically update the user's profile in a database
    document.getElementById('profile-message').innerText = "Profile updated successfully!";
    this.reset();
};

document.getElementById('search-form')?.onsubmit = function(event) {
    event.preventDefault();
    const location = document.getElementById('search-location').value;
    const category = document.getElementById('search-category').value;

    // Simulate a search result
    document.getElementById('search-message').innerText = `Searching for ${category} in ${location}...`;
    // Here you would typically fetch results from a server
};

document.getElementById('trip-form')?.onsubmit = function(event) {
    event.preventDefault();
    const title = document.getElementById('trip-title').value;
    const experiences = document.getElementById('trip-experiences').value;

    // Here you would typically save the itinerary
    document.getElementById('trip-message').innerText = "Itinerary saved successfully!";
    this.reset();
};

document.getElementById('promotion-form')?.onsubmit = function(event) {
    event.preventDefault();
    const businessName = document.getElementById('business-name').value;
    const offerings = document.getElementById('business-offerings').value;
    const offer = document.getElementById('promotion-offer').value;

    // Here you would typically submit the promotion
    document.getElementById('promotion-message').innerText = "Promotion submitted successfully!";
    this.reset();
};
