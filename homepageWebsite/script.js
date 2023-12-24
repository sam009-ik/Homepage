//Get navigation columns
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

//About me
const textAboutMe = `
<p><strong>Hi, I'm Samarth! I like Visuals, Football, Video Games and Anime. . .</strong></p><p>For me coding isn't just a science; it's about creating something out of nothing, especially a new canvas for expression. It's a journey from concept to reality, crafting ideas into tangible solutions.</p>
<h6>Future Aspirations</h6>
<p>I'm on a quest to master Python, JavaScript, and machine learning, blending philosophy with AI to unlock new frontiers. I'm especially drawn to harnessing these skills for environmental and educational breakthroughs.</p>
<h6>Philosophical Inclinations</h6>
<p>Vipassana opened a window to the mind for me, merging the concepts of energy and neuroscience. And Dostoevsky, taught me that its okay to be a paradoxalist.</p>
`;


const inputField = document.getElementById('inputField');
const aboutMe = document.getElementById('aboutMe');
let aboutMeText = '';

inputField.addEventListener('input', function(event){
    //Get length of the typed text
    let typedTextLength = event.target.value.length;
    if (typedTextLength > 0 && aboutMe.style.display === 'none') {
        aboutMe.style.display = 'block';
    }

    if (typedTextLength <= textAboutMe.length) {
        aboutMeText = textAboutMe.substring(0, typedTextLength);
    } else {
        aboutMeText = textAboutMe;
    }
    aboutMe.innerHTML = aboutMeText;
});

const aboutMeButton = document.getElementById('aboutMeButton');
aboutMeButton.addEventListener('click', function(){
    aboutMe.style.display = 'block';
    aboutMe.innerHTML = textAboutMe;
    aboutMeButton.style.backgroundColor = 'black';
    aboutMeButton.style.color = 'white';
});


