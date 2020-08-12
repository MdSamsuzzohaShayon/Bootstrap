// This is my custom js

// const blog = document.getElementById('blog');
const wrapper = document.getElementById('wrapper');
const n_panel = document.getElementById('n-panel');
const menu_icon = document.getElementById('menu-icon');
const footer = document.querySelector('footer');
wrapper.style.marginLeft = '40px';

const name_li = document.getElementById('n-li');
// const icon_li = document.getElementById('l-li');



const blog = document.getElementById('blog');



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





let loader = document.createElement("div");
loader.setAttribute('class', "loader");
blog.style.display = 'none';
footer.style.display = "none";
loader.style.display = 'block';
loader.style.marginLeft = '50%';
loader.style.marginTop = '20%';
console.log(loader);
// document.body.appendChild(loader);
document.body.insertBefore(loader, blog);
console.log(document.body);
// document.body.style.alignItems = "center";
// document.body.style.display = "flex";
// document.body.style.justifyContent = "center";
// document.body.style.height = "100vh";

window.addEventListener('load', ()=>{
    document.body.removeChild(loader);
    console.log(loader);
    footer.style.display = "block";
    blog.style.display = 'block';
});

// window.onload(e => {
//     e.preventDefault();
//     document.body.removeChild(loader);
//     console.log(loader);
//     footer.style.display = "block";
//     loader.style.display = 'block';
// });





/*

let loaded = false;

//     align-items: center;
// display: flex;
// justify-content: center;
let loader = document.createElement("div");
loader.setAttribute('class', "loader");



if(loaded== false){
    console.log(loaded);
    blog.style.display = "none";
    footer.style.display = "none";
    loader.style.display = 'block';
    // loader.style.marginLeft = '50%';
    // loader.style.marginTop = '20%';
    document.body.style.alignItems = "center";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.height = "100vh";
    loaded = false;
}else{
    window.onload(e=>{
        e.preventDefault();
        document.removeChild(loader);
        console.log(loader);

    });
}

// loaded = true;

// const blogBody = document.querySelector('.blog-body');






console.log(loader);
// document.body.appendChild(loader);
document.body.insertBefore(loader, blog);
console.log(document.body);



*/


