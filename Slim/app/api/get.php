<?php

$app->get('/all[/{till}]', function ($request, $response, $args) use ($arr,$db){

	if(isset($args['till']))
		$till = (int)$args['till'];

	if(isset($args['till']) && is_numeric($till)){
		$result = array();
		$c = 0;

		 foreach ($arr as $key) {
		 	if($c < $till){
		 		array_push($result, array('country' => $key['country'], 'name' => $key['name'], 'address' => $key['address'], 'link' => $key['link']) );
		 	}
		 	$c++;
		}
	}else{
		$result = array();
		foreach ($arr as $key) {
			array_push($result, array('country' => $key['country'], 'name' => $key['name'], 'address' => $key['address'], 'link' => $key['link']) );
		}
	}

	if(!isset($args['till']))
    	return json_encode($result);
    else return json_encode($result);

});

$app->get('/names[/{name}]', function ($request, $response, $args) use($arr){

	$result = array();

	if(isset($args['name'])){
		$name = $args['name'];
		foreach ($arr as $key)
			if(strpos($key['name'], $name) !== false)
				array_push($result, array('country' => $key['country'], 'name' => $key['name'], 'address' => $key['address'], 'link' => $key['link']) );
	}else{
		foreach ($arr as $key) {
			array_push($result, $key['name']);
		}
	}
    return json_encode($result);
});

$app->get('/countries', function ($request, $response, $args) use($arr){

	$result = array();

	foreach ($arr as $key) {
		if(!in_array($key['country'], $result))
			array_push($result, $key['country']);
	}

    return json_encode($result);
});

$app->get('/address/{addr}', function ($request, $response, $args) use($arr){

	$result = array();
	$addr = $args['addr'];

	foreach ($arr as $key) {
		if(strpos($key['address'], $addr) !== false)
				array_push($result, array('country' => $key['country'], 'name' => $key['name'], 'address' => $key['address'], 'link' => $key['link']) );
	}

    return json_encode($result);
});

$app->get('/withlink', function ($request, $response, $args) use($arr){

	$result = array();

	foreach ($arr as $key) {
		if(strcmp($key['link'], '') != 0)
			array_push($result, array('country' => $key['country'], 'name' => $key['name'], 'address' => $key['address'], 'link' => $key['link']) );
	}

    return json_encode($result);
});