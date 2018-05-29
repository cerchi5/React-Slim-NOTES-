<?php

$app->get('/names/{manu}[/{year}]', function ($request, $response, $args) use($arr){

	$category = $args['manu'];
	$result = array();

	if(!isset($args['year'])){
		foreach ($arr as $key)
			if(strcmp($key['manu'], $category) == 0)
				array_push($result, $key['mdl']);
	}else{
		$year = (int)$args['year'];
		foreach ($arr as $key)
			if(strcmp($key['manu'], $category) == 0 && $key['yr'] >= $year)
				array_push($result, array('manu' => $key['manu'], 'mdl' => $key['mdl'], 'year' => $key['yr']) );
	}

    return json_encode($result);
});