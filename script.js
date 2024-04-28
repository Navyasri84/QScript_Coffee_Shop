// for nav

function toggleNav() {
    var x = document.querySelector("nav");
    x.classList.toggle("responsive");
}


// for menu section

function orderNow(){
    alert("Your order has been placed!");
}


// for contact message

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    alert('Your message has been sent! We will get back to you soon.'); // For demonstration
});