const button = document.getElementById('color-button');
const body = document.querySelector('body');
const colors = ['Beige', 'DarkGoldenRod', 'DarkSlateGray', 'RosyBrown', 'SandyBrown', 'azure'];

button.addEventListener('click', bgChange);
    function bgChange(){
        const colorIndex = parseInt(Math.random()*colors.length);
        body.style.background = colors[colorIndex];
    }