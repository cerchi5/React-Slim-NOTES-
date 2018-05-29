<?php

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

$app->get('/api/login/{username}/{password}', function ($request, $response, $args) use ($db){

	$user = $args['username'];
	$pass = $args['password'];

	return verifyUser($user,$pass);

	// return json_encode(array('priorityNote' => array()) );
});

$app->get('/api/register/{username}/{password}/{email}', function ($request, $response, $args) use ($db){

	$user = $args['username'];
	$pass = $args['password'];
	$email = $args['email'];

	return register($user,$pass,$email);

	// return json_encode(array('priorityNote' => array()) );
});

$app->get('/api/{username}/delete/{id}', function ($request, $response, $args) use ($db){

	$user = $args['username'];
	$id = $args['id'];

	$res = $db->query("SELECT notes FROM pw.finalproject WHERE username ='".$user."';");
	$result = $res->fetch_array(MYSQLI_ASSOC);
	$res = json_encode($result);

	// print_r($res);

	foreach ($result as $key) {
		echo $key['content']/*."  ".$key["content"]*/;
	}

});

$app->get('/api/{username}', function ($request, $response, $args) use ($db){

	$user = $args['username'];

	$res = $db->query("SELECT notes FROM pw.finalproject WHERE username ='".$user."';");
	$result = $res->fetch_array(MYSQLI_ASSOC);

	$res = json_decode($result["notes"],true);

	// $res[] = $result['notes'];

	// print_r($res);

	foreach ($res as $key) {
		echo $key['id']."  ".$key['title']."  ".$key['content']."  ".$key['priority'];
	}

	// return json_encode('priorityNotes' => array('aa' => 'A','ab' => 'B') );
	// return json_encode(array('priorityNotes' => array('aa' => 'A','ab' => 'B'), 'noPriorityNotes' => array("bb" => "B",'ab' => 'B')));

});


// SELECT [group_concat()]json_object("id",id,"column1",nameOfColumn1) FROM pw.finalproject;
// SELECT concat('[', group_concat(json_object("id",id,"column1",nameOfColumn1)), ']' ) FROM pw.finalproject;
