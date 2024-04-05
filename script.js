const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')


document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'


    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'


    bush2.style.marginBottom = -value + 'px'


    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})


document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to sections when clicking on the navigation links
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }


    var homeLink = document.getElementById('home-link');
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('home-section');
    });


    var aboutLink = document.getElementById('about-link');
    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('about-section');
    });


    var servicesLink = document.getElementById('services-link');
    servicesLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('services-section');
    });


    var contactLink = document.getElementById('contact-link');
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('contact-section');
    });


    var projectLink = document.getElementById('project-link');
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToSection('project-section');
    });
});
