<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$utlisateur_id = $request->id;
$request = json_decode($postdata);
$titre = trim($request->titre);
$categorie = $request->categorie;
$type = $request->type;
$description = trim($request->description);
$image = trim($request->image);
$video = trim($request->video);
$visibilite = $request->visibilite;
$sql = "INSERT INTO contenu(image,video,texte) 
        VALUES ('$image','$video','$description')";
if ($mysqli->query($sql) === TRUE) {
$authdata2 = [
'image' => $image,
'video' => $name,
'texte' => $prenom,
'id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata2);
}
$authdata2 = json_decode($authdata2);
$sql = "INSERT INTO ressource(categorie_id,contenu_id,titre,visibilite,date_ressource,valide,type_ressource_id,utilisateur_id) 
        VALUES ('$categorie','$authdata2->id','$titre',$visibilite,'',1,'$type',$utlisateur_id)";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'categorie_id' => $categorie,
'contenu_id' => $authdata2->id,
'titre' => $titre,
'visibilite' => $visibilite,
'date_ressource' => '',
'valide' => 1,
'type_ressource_id' => $type,
'utilisateur_id' => $utlisateur_id,
'id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>