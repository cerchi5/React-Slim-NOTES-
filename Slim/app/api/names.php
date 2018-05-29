<?php

$app->get('/names', function ($request, $response, $args) use($arr){

	$result = array();

	foreach ($arr as $key) {
		array_push($result, $key['mdl']);
	}

    echo json_encode($result);
    echo $request->getParsedBody();
    

    return $response;
});