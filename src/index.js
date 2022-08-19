import {loadHeader, loadMain, loadFooter} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadContact} from "./contact.js";

loadHeader();
loadMain();
loadFooter();

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
    menuBtn.style.backgroundColor = 'lightGrey';
    contactBtn.style.backgroundColor = 'lightSlateGray';
    homeBtn.style.backgroundColor = 'lightSlateGray';
    loadMenu();
}
)

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', () => {
    menuBtn.style.backgroundColor = 'lightSlateGray';
    contactBtn.style.backgroundColor = 'lightGrey';
    homeBtn.style.backgroundColor = 'lightSlateGray';
    loadContact();
}
)

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
    menuBtn.style.backgroundColor = 'lightSlateGray';
    contactBtn.style.backgroundColor = 'lightSlateGray';
    homeBtn.style.backgroundColor = 'lightGrey';
    loadMain();
})



