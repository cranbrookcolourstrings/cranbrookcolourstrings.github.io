
// JavaScript to toggle the menu visibility
function toggleMenu() {
    var menu = document.getElementById("menu"); // Change 'myMenu' to the ID of your menu
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

// Add event listener for window resize
window.addEventListener('resize', function() {
    var menu = document.getElementById("menu"); // Change 'myMenu' to the ID of your menu
    if (window.innerWidth > 768) { // Change 768 to your breakpoint width
        menu.style.display = "block"; // Change this to the default display style for desktop
    }
});

// Set initial state based on CSS or specific condition
window.onload = function() {
    var menu = document.getElementById("menu");
    // Assuming the menu is hidden by default, adjust if it's different
    if (menu.style.display !== "block") {
        menu.style.display = "none"; // Make this consistent with your CSS
    }
    if (window.innerWidth > 768) { // Change 768 to your breakpoint width
        menu.style.display = "block"; // Change this to the default display style for desktop
    }
};