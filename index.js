// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<p>CSS Mouse Effect</p>`;

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

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
  const xWalk = Math.round((x / width * walk) - (walk / 2)); // changes from 50 to -1 instead of counting from 0 - 100
  const yWalk = Math.round((y / width * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
}

hero.addEventListener('mousemove', shadow);