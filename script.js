const menuLinks = document.querySelectorAll('.cabecacalho-nav a[href^="#"');
function scrollToSection(event) {
    event.preventDefaut();
    const element = event.target;
    const id = element.getAttribute("href");
    const section = document.querySelector(id);
    console.log(section.offsetTop);
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection)
})