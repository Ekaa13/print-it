//Importations html

const arrowRight = document.querySelector('.arrow_right')
const arrowLeft = document.querySelector('.arrow_left')
const img = document.querySelector('.banner-img')
const tagLine = document.querySelector('#tagLine')
const dots = document.querySelector('.dots')

let slideIndex = 0;

//Tableau des slides
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


// Visualise le premier element du tableau dans la banniere et affiche les points vide

showSlides(slideIndex)
createdots()
updatedots(slideIndex)


//Incrémentation de la position puis actualiser l'affichage
arrowRight.addEventListener('click',() => {
	console.log("flèche de droite", slideIndex)
	if(slideIndex === slides.length-1) {
		slideIndex = 0
	}
	else {
	 	slideIndex++
	}
	// Met à jour les données slideIndex
	showSlides(slideIndex)
	updatedots(slideIndex)
});

//Décrémentation de la position puis actualiser l'affichage
arrowLeft.addEventListener('click',() => {
	console.log("flèche de gauche", slideIndex)
	if(slideIndex === 0){
		slideIndex = slides.length-1
	}
	else {
	 	slideIndex--
	}
	// Met à jour les données slideIndex
	showSlides(slideIndex)
	updatedots(slideIndex)
});

//Affichage de l'image et de la tagLine de la position sur le dom (img/p)
function showSlides( position ) {
	img.src = "./assets/images/slideshow/"+slides[position].image
	tagLine.innerHTML =slides[position].tagLine
}

// Création d'un dot par nombre d'élément dans slides
function createdots(){
	for (let index = 0; index < slides.length; index++) {
		const div = document.createElement("div")
		div.setAttribute("class", "dot")
			dots.appendChild(div)
		}
	}

function updatedots(position){
	//Récupération du contenu de la div dot
	const listDots = document.querySelectorAll(".dot")
console.log(position, listDots)
for (let index = 0; index < listDots.length; index++) {
	const div = listDots[index]
	//Mise à jour des dots
	if(index !== position)
	div.setAttribute("class", "dot")
	else 
	div.setAttribute("class", "dot dot_selected")
}	
}
	
