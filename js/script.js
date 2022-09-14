var togglebar1 = $('.nav1')[0];
var togglebar = $('.nav1');
var body = $('body');
var navbar = $('.nav-right2');
var navbar1 = $('.nav-right2')[0];
var image = $('.cimage')[0];
togglebar.on('click', doThis);

// const toggle1 = document.getElementById("toggle");
// const body1 = document.getElementById("body");
// toggle1.on('click', doThis);
var count = 0;
function doThis() {
    count += 1;
    if (navbar1.style.display === 'none' || count % 2 !== 0) {
        togglebar1.src = "images/icons8-close-96.png";
        // navbar.style.display = 'flex';
        navbar.css('display', 'flex');
        navbar.css('flex-direction', 'column');
        navbar.css('gap', '3rem');
        navbar.css('width', '100%');
        navbar.css('height', '100vh');
        navbar.css('font-size', '1.25rem');
        navbar.css('text-align', 'center');
        navbar.css('align-content', 'center');
        navbar.css('justify-content', 'top');
        navbar.css('padding-top', '1rem');
        navbar.css('padding-bottom', '1rem');
    }
    else {
        togglebar1.src = "images/icons8-grip-lines-96.png";
        navbar.css('display', 'none');
        // navbar.style.display = 'none';
    }
    // if (body1.style.backgroundColor === 'none') {
    //     body1.css('background','blue');
    // }
    // else {
    // togglebar.src = ".../images/icons8-grip-lines-96.png";
    // if (navbar.style.display == 'none') {
    // body1.css('background','red'); }
    //     navbar.style.display = 'block';
    //     // togglebar.src = ".../images/icons8-close-96.png";
    // }
    // else {
    //     navbar.style.display = 'none';
    //     body.css('background','blue');


    // }
}

// var button = $('.mode');
// var html = $('html');
// var div1 = $('.container');
// var navbar = $('.nav'); 
// var link1 = $('.navlink'); 
// var link2 = $('.mainlink')
// var body = $('body')
// button.on('click', changeMode);
// var counter = 1;
// function changeMode() {
//     counter += 1;
//     if (counter % 2 == 0) {
//         body.css('color','white');
//         body.css('background-color','black')
//         // button.css('background-color', 'black');
//         // button.css('color', 'white');
//         // button.css('border-color', 'white');
//         // html.css('background-color', 'black');
//         // button.text('Dark mode');
//         // navbar.css('border-color','white');
//         // link1.css('color', 'white');
//         // link2.css('color','white');
//         // div1.css('color','white');
//     }
//     else {
//         body.css('color','black');
//         body.css('background-color','white')
//         // button.css('background-color', 'white');
//         // button.css('color', 'black');
//         // button.css('border-color', 'black');
//         // html.css('background-color', 'white');
//         // button.text('Light mode');
//         // navbar.css('border-color','black');
//         // link1.css('color', 'black');
//         // link2.css('color','black');
//         // div1.css('color','black');
//     }
// }

