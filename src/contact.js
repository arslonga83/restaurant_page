export function loadContact() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    const contact = document.createElement('div');
    contact.classList.add('contactSection');

    const header = contact.appendChild(document.createElement('h1'));
    header.innerHTML = 'CONTACT US';
    const phone = contact.appendChild(document.createElement('p'));
    phone.innerHTML = '(111) 222-3333';
    const email = contact.appendChild(document.createElement('p'));
    email.innerHTML = 'pizza@myhouse.oven';
    const address = contact.appendChild(document.createElement('p'));
    address.innerHTML = '123 P Street, Pietown'

    const img = contact.appendChild(document.createElement('img'));
    img.src = './img/nik-owens-40OJLYVWeeM-unsplash.jpg';
    img.classList.add('contactImg');
    img.alt = 'pizza';

    main.appendChild(contact);
}