const nom = document.querySelector('#input_nom')
const prenom = document.querySelector('#input_prenom')
const mail = document.querySelector('#input_mail')
const tel = document.querySelector('#input_tel')
const message = document.querySelector('#textarea')
const bouton = document.querySelector('#button')
const form = document.querySelector('form')

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



let regex = /^[A-Z][A-Za-z]+$/;
let regexmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexphone = /^(^[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$)|(^[0-9]{10}$)|(^[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}.[0-9]{2}$)|(^\+[0-9]{1,3}(| )([0-9]{9})|([0-9]{1} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2})|(^(\([0-9]{3}\)|[0-9]{3})(| )([0-9]{3})(| |-)([0-9]{4})$))$/im;
let regexmessage = /^[^<>]*$/;

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




form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(nom.value)
	if (nom.value == "" || prenom.value =="" || mail.value =="" || tel.value =="" || message.value == "" || !regex.test(nom.value) || !regexmail.test(mail.value) ||!regexphone.test(tel.value) || !regexmessage.test(message.value) || !regex.test(prenom.value)){

		if (nom.value === "") {
		nomvide.innerHTML = "Champ vide !";
	}
	else if (regex.test(String(nom.value)) == false ) {
		nomvide.innerHTML = "Manque une majuscule !";
		nomvide.style.display = "flex";
		nomvide.style.marginLeft = "-0vh"
	}
	else{
		nomvide.style.display = "none";
	}
	if (prenom.value === ""){
		prenomvide.innerHTML = "Champ vide !";
	}
	else if (regex.test(String(prenom.value)) == false ) {
		prenomvide.innerHTML = "Manque une majuscule !";
		prenomvide.style.display = "flex";
		prenomvide.style.marginLeft = "-0vh"
	}
	else{
		prenomvide.style.display = "none";
	}

	if (mail.value === ""){
		mailvide.innerHTML = "Champ vide !";
	}
	else if (regexmail.test(String(mail.value)) == false ) {
		mailvide.innerHTML = "Mail invalide !";
		mailvide.style.display = "flex";
		mailvide.style.marginLeft = "4vh"
	}
	else{
		mailvide.style.display = "none";
	}
	if (tel.value === ""){
		telvide.innerHTML = "Champ vide !";
	}
	else if (regexphone.test(String(tel.value)) == false ) {
		telvide.innerHTML = "Pas un numéros !";
		telvide.style.display = "flex";
		telvide.style.marginLeft = "3vh"
	}
	else {
		telvide.style.display = "none";
	}
	if (message.value === "") {
		messagevide.innerHTML = "Champ vide !";
	}
	
	else {
		messagevide.style.display = "none";
	}

	

	nomrose.style.display = "none";
	nomgris.style.display = "flex";
	prenomrose.style.display = "none";
	prenomgris.style.display = "flex";
	mailrose.style.display = "none";
	mailgris.style.display = "flex";
	telrose.style.display = "none";
	telgris.style.display = "flex";
		
	}


	


else{



  const data = new FormData(form);
   // configure a request
   const xhr = new XMLHttpRequest();

   xhr.responseType = 'json';
   xhr.open('POST', 'script.php');

   // send request
   xhr.send(data);

   // listen for `load` event
   xhr.onload = () => {
     let res = xhr.response;
     form.reset();
       console.log(res);
   }}
})