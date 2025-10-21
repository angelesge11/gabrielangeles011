// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function _open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function _close() {
    mySidebar.style.display = "none";
}

// Preload images
const imageUrls = [
    'assets/img/background/480478430_18073215928783196_8228695357997534342_n.jpg',
    'assets/img/background/480986251_1192875509131969_7196328933746845287_n.jpg',
    'assets/img/background/481479661_1196158835470303_2174363478593493796_n.jpg',
    'assets/img/background/481479661_1196158835470303_2174363478593493796_n.jpg',
    'assets/img/background/497915110_18081238888783196_7105275381372672599_n.jpg'
];

imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
});

// Slideshow functionality
let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

// Initialize the first slide as active
slides[index].classList.add("active");

setInterval(changeSlide, 4000);