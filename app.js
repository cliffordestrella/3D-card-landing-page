//Movement animation to happen

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//items
const title = document.querySelector('.info h1');
const gadget = document.querySelector('.gadget img');
const contact = document.querySelector('.contact button');
const description = document.querySelector('.info h3');


//Moving Animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animation cursor in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    //popout
    title.style.transform = "translateZ(125px)";
    gadget.style.transform = "translateZ(200px)";
    description.style.transform = "translateZ(100px)";
    contact.style.transform = "translateZ(75px)";
});


//animation cursor out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)";
    gadget.style.transform = "translateZ(0px) rotateZ(0deg)";
    contact.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
});

