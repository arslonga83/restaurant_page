export function test() {
    alert('this is also a test');
}

export function loadHeader() {
    const content = document.getElementById('content');
   
    const top = document.createElement('div');
    top.id = 'top';

    const header = document.createElement('div');
    header.classList.add('header');
    const h1 = header.appendChild(document.createElement('h1'));
    h1.textContent = 'Jeff\'s Pizza Kitchen';
    top.appendChild(header);

    const nav = document.createElement('div');
    nav.classList.add('nav');
    const btn1 = nav.appendChild(document.createElement('button'));
    btn1.id = 'home';
    btn1.innerHTML = 'HOME';
    btn1.style.color = 'red';
    const btn2 = nav.appendChild(document.createElement('button'));
    btn2.id = 'menu';
    btn2.innerHTML = 'MENU';
    const btn3 = nav.appendChild(document.createElement('button'));
    btn3.id = 'contact'
    btn3.innerHTML = 'CONTACT';
    top.appendChild(nav);

    content.appendChild(top);


    const main = document.createElement('div');
    main.id = 'main';
    content.appendChild(main);
}

export function loadMain() {

    const main = document.getElementById('main');
    main.innerHTML = '';
    const mainContent = document.createElement('div');
    mainContent.id = 'mainContent';
    const img = mainContent.appendChild(document.createElement('img'));
    img.src = '../src/shaian-ramesht-exSEmuA7R7k-unsplash.jpg';
    img.alt = 'pizza';
    
    const text = mainContent.appendChild(document.createElement('div'));
    text.classList.add('text');
    const p1 = text.appendChild(document.createElement('p'));
    const p2 = text.appendChild(document.createElement('p'));
    p1.innerHTML = 'The best vegan pies in Tigard are definitely the ones you make yourself. We\'ve been perfecting our technique since we first bought a pizza stone, and still have a good track record of not dropping dough on the floor (except for the toddler!) Farm fresh tomatoes and basil from the garden make our pizza pretty much the perfect food.';
    p2.innerHTML = 'We are not a real restaurant, and are <strong>not</strong> open to the public, but it\'s fun to pretend!'
    
    main.appendChild(mainContent);
    content.appendChild(main);
};
