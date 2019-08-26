// This is my custom js

const wrapper = document.getElementById('wrapper');
const n_panel = document.getElementById('n-panel');
const menu_icon = document.getElementById('menu-icon');
const footer = document.querySelector('footer');
wrapper.style.marginLeft = '40px';

const name_li = document.getElementById('n-li');
// const icon_li = document.getElementById('l-li');


let display_expand = false;

if (window.innerWidth > 412) {
    n_panel.addEventListener('mouseover', () => {
        wrapper.style.marginLeft = '260px';
        name_li.style.display = 'block';
    });

    n_panel.addEventListener('mouseout', () => {
        wrapper.style.marginLeft = '40px';
        name_li.style.display = 'none';

    });
}



menu_icon.addEventListener('click', (e) => {
    n_panel.style.display = 'block';
    wrapper.style.display = 'none';
    footer.style.display = 'none';
    display_expand = true;
});

// display_expand = true;
// if (display_expand) {

//     window.addEventListener('click', (e) => {
//         n_panel.style.display = 'none';
//         wrapper.style.display = 'block';
//         footer.style.display = 'block';
//     });
// }
console.log(display_expand);

