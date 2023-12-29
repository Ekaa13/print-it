//importations html

const arrowRight = document.querySelector('.arrow_right')
const arrowLeft = document.querySelector('.arrow_left')
const img = document.querySelector('.banner-img')
const tagLine = document.querySelector('#tagLine')
const dots = document.querySelector('.dots')

let slideIndex = 0;

//tableau des slides
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
]


// visualiser le premier element du tableau dans la banniere et afficher les points vide

showSlides(slideIndex);
createdots();
updatedots(slideIndex);

//afficher l'image et le tagLine de la position sur le dom ( img et p )
function showSlides( position ) {

	img.src = "./assets/images/slideshow/"+slides[position].image;
	tagLine.innerHTML =slides[position].tagLine;
}
//incrémentation de la position puis actualiser l'affichage
arrowRight.addEventListener('click',() => {
	console.log("flèche de droite", slideIndex);
	if(slideIndex === slides.length-1) {
		slideIndex = 0;
	}
	else
	 	slideIndex++;
	
	showSlides(slideIndex);
	updatedots(slideIndex);
});

//décrémentation de la position puis actualiser l'affichage
arrowLeft.addEventListener('click',() => {
	console.log("flèche de gauche", slideIndex);
	if(slideIndex === 0){
		slideIndex = slides.length-1;
	}
	else
	 	slideIndex--;
	
	// met à jour les données slideIndex
	showSlides(slideIndex);
	updatedots(slideIndex);
});

function updatedots(position){
	//recuperer le contenu de la div dots
	const listDots = document.querySelectorAll(".dot");
console.log(position, listDots);
for (let index = 0; index < listDots.length; index++) {
	const div = listDots[index];
	//update du tableau dots 
	if(index !== position)
	div.setAttribute("class", "dot");
	else 
	div.setAttribute("class", "dot dot_selected");
}	
}
	
// création d'un dot par nombre d'élément dans slides
function createdots(){
	
	for (let index = 0; index < slides.length; index++) {
		
		const div = document.createElement("div");
		div.setAttribute("class", "dot");
			dots.appendChild(div);
		}
	}