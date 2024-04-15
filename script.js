
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");
        if (top > offset && top < offset + height) { 
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*='+ id + ']').classList.add("active");
            })
        }
    })
}

menuIcon.onclick = () => { 
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active")
}


let submit = document.getElementById("submit")
submit.onclick = () => { sendEmail }

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "bhaleraopratham1@gmail.com",
        Password : "derek@portfolio",
        To : 'prathambh41@gmail.com',
        From : "bhaleraopratham1@gmail.com",
        Subject : document.getElementById("subject").value.toString,
        Body : "Name:" + document.getElementById("name").value
            + "<br> Email id: " + document.getElementById("email").value
            + "<br> Phone no: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent succesfully")
    );
}