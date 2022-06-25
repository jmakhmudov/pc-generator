// Mobile Navbar
let navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-50vw";
}  


// Auto-slider
let i = 0;
autoSlider();

function autoSlider() {
    let img = document.querySelectorAll(".hero-img");
    
    if (i===0) {
        img[0].style.display = "none";
        img[1].style.display = "block";
        i=1;
    }
    else {
        img[0].style.display = "block";
        img[1].style.display = "none";
        i = 0;
    }
    
    setTimeout(autoSlider, 3500); // Change image every 3.5 seconds
}






function priceSlider() {
    let price = document.getElementById('priceValue');
    price.innerText = '';

    let budget = document.getElementById('priceRange');
    price.innerText = budget.value;
}
 


