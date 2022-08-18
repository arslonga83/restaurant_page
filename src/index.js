import {test, loadHeader, loadMain} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadContact} from "./contact.js";

//alert('this is a test');

//test();

loadHeader();
loadMain();

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
    loadMenu();
}
)

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', () => {
    loadContact();
}
)

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
    const main = document.getElementById('main');
    main.innerHTML = '';
    loadMain();
})



