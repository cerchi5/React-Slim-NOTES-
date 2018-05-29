<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '/../vendor/autoload.php';

$app = new \Slim\App();

//Variables
$db = new mysqli('localhost:3306', 'cerchi','cerchi');

//Functions

function verifyUser($user, $pass){
	global $db;

	$res = $db->query("SELECT COUNT(*) FROM pw.finalproject WHERE username = '".$user."' and password = '".$pass."';");
	// echo $db->error;
	$result = $res->fetch_array(MYSQLI_ASSOC);

	if($result['COUNT(*)'] > 0)
		return TRUE;
	else return FALSE;
}

function register($user,$pass,$email){
	global $db;

	$res = $db->query("SELECT COUNT(*) FROM pw.finalproject WHERE username = '".$user."' OR email = '".$email."';");
	echo $db->error;
	$result = $res->fetch_array(MYSQLI_ASSOC);

	if($result['COUNT(*)'] > 0)
		return FALSE;

	$res = $db->query("INSERT INTO pw.finalproject(username, password, email, notes) VALUES ('".$user."', '".$pass."', '".$email."', JSON_ARRAY(JSON_OBJECT('id',1,'title','HELLO WORD','content','Add your thoughts right here! ','priority',true,'dateAdded','".date("d-m-Y")."') ) );");
	// $db->error;
}

function getNotes($user){
	global $db;

	
}

require_once('../app/api/pwFunctions.php');

$app->run();

?>