const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const slider = document.querySelector('.carouseles');
const sliderSection = document.querySelectorAll('.slider-section');

let operacion = 0;
let widthimg = 100 / sliderSection.length;
let counter = 0;

setInterval(() => {
  moveToRight()
}, 6000);

const moveToRight = () => {
  if(counter >= sliderSection.length-1){
    counter = 0;
    operacion = 0;
    slider.style.transform = `translate(-${operacion}%)`
    
  }else {
    counter++;
    operacion += widthimg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = 'all ease .6s'
  }
}

const moveToLeft = () => {
  counter--;
  if(counter < 0){
    counter = sliderSection.length-1;
    operacion =  widthimg * (sliderSection.length-1)
    slider.style.transform = `translate(-${operacion}%)`
    
  }else {
    operacion -= widthimg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = 'all ease .6s'
  }
}
