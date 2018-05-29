<?php

$app->get('/categories', function ($request, $response, $args) use($arr){

	$result = array();

	foreach ($arr as $key) {
		if(!in_array($key['manu'], $result))
			array_push($result, $key['manu']);
	}

    return json_encode($result);
});