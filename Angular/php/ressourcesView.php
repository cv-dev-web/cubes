<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$id = trim($request->id);
$sql = "SELECT DISTINCT 
        R.titre as 'titre', TR.libelle_type_ressource as 'type', C.libelle_categorie as 'categorie',
        CO.image as 'image', CO.video as 'video', CO.texte as 'description'
        FROM ressource as R 
        join categorie as C on R.categorie_id = C.id
        join type_ressource as TR on R.type_ressource_id = TR.id
        join contenu as CO on R.contenu_id = CO.id
        where R.id='$id'";
if($result = mysqli_query($mysqli,$sql))
{
$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
http_response_code(404);
}
}
?>