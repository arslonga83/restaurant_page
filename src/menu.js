export function loadMenu() {
    const main = document.getElementById('main');
    main.innerHTML = '';

    const menu = document.createElement('div');
    menu.classList.add('menuSection');

    menu.appendChild(menuHeader('PIZZAS'));
    
    //maybe add images to each? menu.appendChild(menuImg());
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

    menu.appendChild(menuHeader('SALADS'));

    //ADD SALADS HERE

    menu.appendChild(menuHeader('DRINKS'));

    //ADD DRINKS HERE


    
    main.appendChild(menu);
    content.appendChild(main);
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