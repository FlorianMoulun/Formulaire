const nom = document.querySelector('#input_nom')
const prenom = document.querySelector('#input_prenom')
const mail = document.querySelector('#input_mail')
const tel = document.querySelector('#input_tel')
const message = document.querySelector('#textarea')

let nomrose = document.querySelector('#nom_rose')
let nomgris = document.querySelector('#image_nom')
let prenomrose = document.querySelector('#prenom_rose')
let prenomgris = document.querySelector('#image_prenom')
let mailrose = document.querySelector('#mail_rose')
let mailgris = document.querySelector('#image_mail')
let telrose = document.querySelector('#tel_rose')
let telgris = document.querySelector('#image_tel')

nom.addEventListener('click', function(){

	nomrose.style.display = "flex";
	nomgris.style.display = "none";
	prenomrose.style.display = "none";
	prenomgris.style.display = "flex";
	mailrose.style.display = "none";
	mailgris.style.display = "flex";
	telrose.style.display = "none";
	telgris.style.display = "flex";

})

prenom.addEventListener('click', function(){

	nomrose.style.display = "none";
	nomgris.style.display = "flex";
	prenomrose.style.display = "flex";
	prenomgris.style.display = "none";
	mailrose.style.display = "none";
	mailgris.style.display = "flex";
	telrose.style.display = "none";
	telgris.style.display = "flex";

})

mail.addEventListener('click', function(){

	nomrose.style.display = "none";
	nomgris.style.display = "flex";
	prenomrose.style.display = "none";
	prenomgris.style.display = "flex";
	mailrose.style.display = "flex";
	mailgris.style.display = "none";
	telrose.style.display = "none";
	telgris.style.display = "flex";

})

tel.addEventListener('click', function(){

	nomrose.style.display = "none";
	nomgris.style.display = "flex";
	prenomrose.style.display = "none";
	prenomgris.style.display = "flex";
	mailrose.style.display = "none";
	mailgris.style.display = "flex";
	telrose.style.display = "flex";
	telgris.style.display = "none";

})
message.addEventListener('click', function(){

	nomrose.style.display = "none";
	nomgris.style.display = "flex";
	prenomrose.style.display = "none";
	prenomgris.style.display = "flex";
	mailrose.style.display = "none";
	mailgris.style.display = "flex";
	telrose.style.display = "none";
	telgris.style.display = "flex";

})