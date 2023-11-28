const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');  

let currentIndex = 0;

function updateDots(index) {
  // dots moving
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected'); 
        }
    });
}

function updateCarousel(index, direction) {
  
  //maj img
  const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
  bannerImg.src = imagePath;
  bannerImg.alt = `Slide ${currentIndex + 1}`;

  //maj txt
  const tagLine = slides[currentIndex].tagLine;
  document.querySelector('p').innerHTML = tagLine;

  console.log(`Clic sur la flèche ${direction}`);
}

// event left arrow
arrowLeft.addEventListener('click', function () {
  currentIndex = (currentIndex - 1);
  updateCarousel(currentIndex, 'left');
  updateDots(currentIndex); 
});

// event right arrow
arrowRight.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) ;
  updateCarousel(currentIndex, 'right');
  updateDots(currentIndex); 
});


// first img when reloading
updateCarousel(currentIndex, 'démarrage');
updateDots(currentIndex); 