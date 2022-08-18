export function loadMenu() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    const menu = document.createElement('div');
    menu.classList.add('menuSection');

    menu.appendChild(menuHeader('PIZZA'));
    
    const img = menu.appendChild(document.createElement('img'));
    img.src = '../src/img/ivan-torres-MQUqbmszGGM-unsplash.jpg';
    img.classList.add('menuImg');
    img.alt = 'pizza';
    
    menu.appendChild(menuItem('Fresh Tomato and Basil'));
    menu.appendChild(menuDesc(
        'Fresh garden cherry tomatoes and basil, sauce, vegan cheese (only available in summer)'
    ));

    menu.appendChild(menuItem('Tempeh and Bell Pepper'));
    menu.appendChild(menuDesc(
        'Tofurky tempeh bacon, green or red bell pepper, sauce, vegan cheese'
    ));

    menu.appendChild(menuItem('Buffalo Cauliflower'));
    menu.appendChild(menuDesc(
        'Roasted cauliflower florets, Frank\'s hot sauce, green bell pepper, sauce, vegan cheese, vegan blue cheese dressing'
    ));

    menu.appendChild(menuItem('Greek "Chick\'n"'));
    menu.appendChild(menuDesc(
        'Morningstar Not-Chicken Nuggets, artichoke hearts, sauce, vegan cheese'
    ))

    menu.appendChild(menuHeader('SALAD'));

    const img2 = menu.appendChild(document.createElement('img'));
    img2.src = '../src/img/anna-pelzer-IGfIGP5ONV0-unsplash.jpg';
    img2.classList.add('menuImg');
    img2.alt = 'salad';

    menu.appendChild(menuItem('Bag \'o Salad'));
    menu.appendChild(menuDesc('Safeway\'s finest salad in a bag mix, with crunchy bits and dressing included'));

    menu.appendChild(menuItem('Cucumber Salad'));
    menu.appendChild(menuDesc('Lemon cucumbers from the garden, sprinkled with salt (only available in summer'));

    menu.appendChild(menuItem('Corn and Tomato Salad'));
    menu.appendChild(menuDesc('Tomatoes from the garden and corn off the cob mixed with a simple vinagrette'));

    menu.appendChild(menuHeader('DRINKS'));

    const img3 = menu.appendChild(document.createElement('img'));
    img3.src = '../src/img/josh-olalde--Ygu9Qx309s-unsplash.jpg';
    img3.classList.add('menuImg');
    img3.alt = 'beer';

    menu.appendChild(menuItem('Water'));
    menu.appendChild(menuItem('Seltzer'));
    menu.appendChild(menuItem('Beer'));

    main.appendChild(menu);
}



//helper functions to create menu

function menuHeader(text) {
    const header = document.createElement('h1');
    header.innerHTML = (text);
    header.classList.add('menuHeader');
    return header;
}

function menuItem(text) {
    const item = document.createElement('h2');
    item.classList.add('item');
    item.innerHTML = (text);
    return item;
}

function menuDesc(text) {
    const description = document.createElement('p');
    description.innerHTML = (text);
    description.classList.add('menuDesc');
    return description;
}