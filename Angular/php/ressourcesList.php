<?php
include_once("database.php");
$sql = "SELECT utilisateur.prenom as 'utilisateur', ressource.titre as 'titre', ressource.id as 'id'
        FROM ressource join utilisateur on ressource.utilisateur_id = utilisateur.id";
$result = $mysqli->query($sql);
$myArr = array();
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
$myArr[] = $row;
}
} else {
echo "0 results";
}

$myJSON = json_encode($myArr);
echo $myJSON;

?>