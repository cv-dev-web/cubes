<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$prenom = trim($request->prenom);
$date = $request->date;
$cpassword = mysqli_real_escape_string($mysqli, trim($request->cpassword));
$sql = "INSERT INTO utilisateur(grade_id,nom,prenom,date_naissance,email,mdp,avatar,actif) 
        VALUES (186,'$name','$prenom','$date','$email','$pwd','https://randomuser.me/api/portraits/men/31.jpg',1)";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'grade_id' => 186,
'nom' => $name,
'prenom' => $prenom,
'date_naissance' => $date,
'mdp' => '',
'email' => $email,
'avatar' => 'https://randomuser.me/api/portraits/men/31.jpg',
'actif' => 1,
'id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>