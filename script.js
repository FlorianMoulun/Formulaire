const nom = document.querySelector('#input_nom')
const prenom = document.querySelector('#input_prenom')
const mail = document.querySelector('#input_mail')
const tel = document.querySelector('#input_tel')
const message = document.querySelector('#textarea')
const bouton = document.querySelector('#button')


const nomvide = document.querySelector('#nom_vide')
const prenomvide = document.querySelector('#prenom_vide')
const mailvide = document.querySelector('#mail_vide')
const telvide = document.querySelector('#tel_vide')
const messagevide = document.querySelector('#message_vide')

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




bouton.addEventListener('click', function(){
	if ((nom.value == 0) || (prenom.value == 0) || (mail.value == 0) || (tel.value ==0) || (message.value == 0)){
		alert('Erreur !')
	}
	else {
		alert('Message envoyer avec succès !')
	}

	if (nom.value == 0) {
		nomvide.innerHTML = "Champ vide !";
	}
	else{
		nomvide.style.display = "none"
	}
	if (prenom.value == 0){
		prenomvide.innerHTML = "Champ vide !";
	}
	else{
		prenomvide.style.display = "none"
	}
	if (mail.value == 0){
		mailvide.innerHTML = "Champ vide !";
	}
	else{
		mailvide.style.display = "none"
	}
	if (tel.value == 0){
		telvide.innerHTML = "Champ vide !";
	}
	else{
		telvide.style.display = "none"
	}
	if (message.value == 0) {
		messagevide.innerHTML = "Champ vide !";
	}
	else{
		messagevide.style.display = "none"
	}

	

	nomrose.style.display = "none";
	nomgris.style.display = "flex";
	prenomrose.style.display = "none";
	prenomgris.style.display = "flex";
	mailrose.style.display = "none";
	mailgris.style.display = "flex";
	telrose.style.display = "none";
	telgris.style.display = "flex";

})
