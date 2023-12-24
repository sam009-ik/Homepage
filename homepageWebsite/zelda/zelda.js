const navCols = document.getElementsByClassName('nav-cols');
const navText = document.getElementsByClassName('nav-text');

//Loop to change colors of nav-items
for (let i = 0; i < navCols.length; i++) {
    navCols[i].addEventListener('mouseover', function () {
        navCols[i].style.backgroundColor = 'black';
        navText[i].style.color = 'white'; // Updated property name to 'color'
    });

    navCols[i].addEventListener('mouseout', function () {
        navCols[i].style.backgroundColor = '';
        navText[i].style.color = 'black'; // Updated property name to 'color'
    });
}
