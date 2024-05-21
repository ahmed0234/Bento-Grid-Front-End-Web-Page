import './style.css'
import { gsap } from "gsap";




const p = document.getElementById('title__description');


function splitTextIntoSpans2(element) {
  const text = element.innerText;
  element.innerHTML = '';
  text.split('').forEach(char => {
      const span = document.createElement('span');
      span.classList.add('desk');
      span.innerText = char;
      element.appendChild(span);
  });
}


splitTextIntoSpans2(p);




let tl = gsap.timeline()




tl.from(".char", {
  opacity: 0,
  y: 100,
  stagger: 0.05,
  duration: 0.2,
  ease: "power2.out",
});

tl.from(".desk", {
  opacity: 0,
  stagger: 0.0080,
  duration: 0.010,
  ease: "power2.out",
}, "-=2");

tl.from('.card', {
  height: 0,
  opacity: 0,
  stagger: 0.1
}, "-=1")

tl.from('.right__big__card', {
  height: 0,
  opacity: 0,
  duration: 1,
  ease: 'expo.out'
}, "-=0.5")

tl.from('header', {
  opacity: 0,
  y: -100,
  duration: 1,
  ease: 'power4.out'
})



