<?php 
$regleNomPrenom = "/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'-]+$/";
$regleEmail = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
$regleMessage = "/^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ',;()-]+$/";
$VotreAdresseMail = "f.moulun@codeur.online";

if((isset($_POST['nomform']))&&(preg_match($regleNomPrenom, $_POST['nomform']))){
$nom = $_POST['nomform'];
}
if((isset($_POST['prenomform']))&&(preg_match($regleNomPrenom, $_POST['prenomform']))){
$prenom = $_POST['prenomform'];
}
if((isset($_POST['mailform']))&&(preg_match($regleEmail, $_POST['mailform']))){
$email = $_POST['mailform'];
}
if(isset($_POST['telform'])){
$tel = $_POST['telform'];
}
if((isset($_POST['messageform']))&&(preg_match($regleMessage, $_POST['messageform']))){
$message = $_POST['messageform'];
}
if(($nom)&&($prenom)&&($email)&&($message)){
$res = array('validation' => "Demande envoyée !");
echo json_encode($res);
mail($VotreAdresseMail, "Bonjour, $prenom", $message, "From: $email");

}



?>