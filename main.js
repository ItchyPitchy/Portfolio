const grids = document.querySelectorAll('.grid-item');
const headerText = document.querySelector('.header-text-container');
const nav = document.querySelector('.nav-container');
let num = 0;

const delay = time => new Promise(resolve => setTimeout(resolve, time));

delay(0).then(() => {
    grids.forEach(grid => {
        setTimeout(() => {
            grid.style.opacity = '0';
        }, num += 100)
    })
})

delay(1500).then(() => {
    headerText.style.opacity = 1;
})

delay(2500).then(() => {
    nav.style.opacity = 1;
})

const projectImages = document.querySelectorAll('.project-image');

projectImages.forEach(image => {
    image.addEventListener('mouseover', event => {
        // event.currentTarget.querySelector('.overlay').style.display = 'unset';
        // event.currentTarget.querySelector('.link-container').style.display = 'unset';
    })
    image.addEventListener('mouseout', event => {
        // event.currentTarget.querySelector('.overlay').style.display = 'none';
        // event.currentTarget.querySelector('.link-container').style.display = 'none';
    })
})

const toProjectsArr = [];
toProjectsArr.push(document.querySelector('#myProjects'));
toProjectsArr.push(document.querySelector('#menu-projects'));

toProjectsArr.forEach(element => {
    element.addEventListener('click', event => {
        const projectSection = document.querySelector('.projects-section');
        projectSection.scrollIntoView({behavior: "smooth"});
        document.querySelector('.menu-container').classList.remove('active');
        document.querySelector('.hamburger-menu').classList.remove('active');
    })
})

const toAboutArr = [];
toAboutArr.push(document.querySelector('#menu-about'));
toAboutArr.push(document.querySelector('#aboutMe'));

toAboutArr.forEach(element => {
    element.addEventListener('click', event => {
        const aboutMeSection = document.querySelector('.about-section');
        aboutMeSection.scrollIntoView({behavior: "smooth", block: "start"});
        document.querySelector('.menu-container').classList.remove('active');
        document.querySelector('.hamburger-menu').classList.remove('active');
    })
})

const toContactArr = [];
toContactArr.push(document.querySelector('#menu-contact'));
toContactArr.push(document.querySelector('#contactMe'));

toContactArr.forEach(element => {
    element.addEventListener('click', event => {
        const contactSection = document.querySelector('footer');
        contactSection.scrollIntoView({behavior: "smooth", block: "end"});
        document.querySelector('.menu-container').classList.remove('active');
        document.querySelector('.hamburger-menu').classList.remove('active');
    })
})

const toHomeBtn = document.querySelector('#menu-home');

toHomeBtn.addEventListener('click', event => {
    const home = document.querySelector('header');
    home.scrollIntoView({behavior: "smooth", block: "start"});
    document.querySelector('.menu-container').classList.remove('active');
    document.querySelector('.hamburger-menu').classList.remove('active');
})

const toggleMenuBtn = document.querySelector('.hamburger-menu');

toggleMenuBtn.addEventListener('click', event => {
    document.querySelector('.menu-container').classList.toggle('active');
    event.currentTarget.classList.toggle('active');
})