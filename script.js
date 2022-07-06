"use strict"

function parallax1(event) {
    this.querySelectorAll(".background__video").forEach(background__video => {
        background__video.style.transform = `translate(${event.clientX / 80}px, ${event.clientY / 80}px)`
    });
}

function parallax2(event) {
    this.querySelectorAll(".home").forEach(home => {
        home.style.transform = `translate(${event.clientX / 50}px, ${event.clientY / 50}px)`
    });
}

function parallax3(event) {
    this.querySelectorAll(".section-logo").forEach(sectionLogo => {
        sectionLogo.style.transform = `translate(${event.clientX / 70}px, ${event.clientY / 50}px)`
    });
}

function parallax4(event) {
    this.querySelectorAll(".about__info").forEach(abouttext => {
        abouttext.style.transform = `translate(${event.clientX / 30}px, ${event.clientY / 50}px)`
    });
}
function parallax5(event) {
    this.querySelectorAll(".services__container").forEach(services__container => {
        services__container.style.transform = `translate(${event.clientX / 30}px, ${event.clientY / 50}px)`
    });
}
function parallax6(event) {
    this.querySelectorAll(".contact__container").forEach(contact__container => {
        contact__container.style.transform = `translate(${event.clientX / 30}px, ${event.clientY / 50}px)`
    });
}



function scroll1() {
    const el1 = document.querySelector('.services');
    el1.scrollIntoView({
        behavior: 'smooth'
    });
}

function scroll2() {
    const el2 = document.querySelector('.about');
    el2.scrollIntoView({
        behavior: 'smooth'
    });
}

function scroll3() {
    const el3 = document.querySelector('.contacts');
    el3.scrollIntoView({
        behavior: 'smooth'
    });
}

function scroll() {
    const el = document.querySelector('.home');
    el.scrollIntoView({
        behavior: 'smooth'
    });
}

const button = document.querySelector('.button-logo')

const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')

button1.addEventListener('click', scroll1)
button2.addEventListener('click', scroll2)
button3.addEventListener('click', scroll3)

button.addEventListener('click', scroll)


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        } else {
            change.target.classList.remove('element-show');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.menu__buttons');

for (let elm of elements) {
    observer.observe(elm);
}

let elements1 = document.querySelectorAll('.services');

for (let elm of elements1) {
    observer.observe(elm);
}

let elements2 = document.querySelectorAll('.about');

for (let elm of elements2) {
    observer.observe(elm);
}

let elements3 = document.querySelectorAll('.contacts');

for (let elm of elements3) {
    observer.observe(elm);
}



document.addEventListener('mousemove', parallax1);
document.addEventListener('mousemove', parallax2);
document.addEventListener('mousemove', parallax3);
document.addEventListener('mousemove', parallax4);
document.addEventListener('mousemove', parallax5);
document.addEventListener('mousemove', parallax6);






