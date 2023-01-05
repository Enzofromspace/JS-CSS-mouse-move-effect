// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<p>CSS Mouse Effect</p>`;

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e){
  //console.log(e);
  /* Option 1 - went with destructured option below
  const width = hero.offsetWidth;
  const height = hero.offsetHeight; */
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = e;
  
  if(this !== e.target){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
}

hero.addEventListener('mousemove', shadow);