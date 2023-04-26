// Element.getBoundingClientRect() => regresa el tamaño de un elemnto y su posicion conforme a la vista
// en este caso se utilizara para ser mas dinamico el desarrollo del navbar.

//? Set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()

//? ------------------------------------- set links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click' , function(){
    //linksContainer.classList.toggle("show-links");
    
    //containerHeight conseguira el tamaño y la posicion de la clase .linksContainer
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.styles.height = `${linksHeight}px`
    }
    else {
        linksContainer.styles.height = 0
    }
});

//? ----------------------- fixed navbar
// pageYOffset regresa el numero de pixeles del documento que ha sido scroleado (scrolled) verticalmente.
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener("scroll",function (){
    const navHeight = navbar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight >500){
        topLink.classList.add('show-link');
    }
    else{
        topLink.classList.remove('show-link');
    }


})

//? ---------------------- smooth scroll
//? slice extrae una seccion del string sin modificar el string original
//? offsetTop un numero que representa el posicionamiento top del elemento en pixeles
//? select links

/*
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(links){
    links.addEventListener("click", function (e) {
        //prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        
        let position = element.offsetTop - navHeight;
        //console.log(position)
        
        if(!fixedNav){
            position = position - navHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});*/

alert('hola mundo')