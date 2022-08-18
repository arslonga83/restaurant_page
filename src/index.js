import {test, loadHeader, loadMain} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadContact} from "./contact.js";

//alert('this is a test');

//test();

loadHeader();
loadMain();

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
    menuBtn.style.color = 'red';
    contactBtn.style.color = 'white';
    homeBtn.style.color = 'white';
    loadMenu();
}
)

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', () => {
    menuBtn.style.color = 'white';
    contactBtn.style.color = 'red';
    homeBtn.style.color = 'white';
    loadContact();
}
)

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
    menuBtn.style.color = 'white';
    contactBtn.style.color = 'white';
    homeBtn.style.color = 'red';
    loadMain();
})



