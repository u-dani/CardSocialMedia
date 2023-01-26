
const cards = document.querySelectorAll('.c-card');
const menuItems = document.querySelectorAll('.c-menu__item');


menuItems.forEach( item => {
    item.addEventListener('click', active);
});


function active( {target} ) {

    cards.forEach( card => {
        card.classList.remove('is-card-active');

        if (card.dataset.name == target.parentNode.dataset.name) {
            card.classList.add('is-card-active');
        }
    })
}