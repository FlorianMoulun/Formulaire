<?php 
$nom = $_POST['nomform'];

$prenom = $_POST['prenomform'];

$message = $_POST['messageform'];

$mail = $_POST['mailform'];



$VotreAdresseMail="f.moulun@codeur.online";

if(isset($_POST['form'])) {
    
    if(empty($mail)) {
        echo "Le champ mail est vide";
    } else {
       
        if(!preg_match("#^[a-z0-9_-]+((\.[a-z0-9_-]+){1,})?@[a-z0-9_-]+((\.[a-z0-9_-]+){1,})?\.[a-z]{2,}$#i",$mail)){
            echo "L'adresse mail entrée est incorrecte";
        }else{
            
            if(empty($nom && $prenom)) {
                echo "Le champ nom ou prenom est vide";
            }else{
               
                if(empty($message)) {
                    echo "Le champ message est vide";
                }else{
                   
                    $Entetes = "MIME-Version: 1.0\r\n";
                    $Entetes .= "Content-type: text/html; charset=UTF-8\r\n";
                    $Entetes .= "From: Formulaire <".$mail.">\r\n"; 
                    $Entetes .= "Reply-To: Formulaire <".$mail.">\r\n";
                   
                     
                    $Sujet='=?UTF-8?B?'.base64_encode($nom && $prenom).'?=';
                    $Messages=htmlentities($message,ENT_QUOTES,"UTF-8");
                    if(mail($VotreAdresseMail,$Sujet,nl2br($Messages),$Entetes)){
                        echo "Le mail à été envoyé avec succès!";
                    } else {
                        echo "Une erreur est survenue, le mail n'a pas été envoyé";
                    }
                }
            }
        }
    }
}


?>