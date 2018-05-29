<?php

$app->get('/year[/{year}]', function ($request, $response, $args) use($arr){

	$result = array();

	if(isset($args['year'])){
		$year = (int)$args['year'];

		foreach ($arr as $key) {
			if((int)$key['yr'] == $year)
				array_push($result, array('mdl' => $key['mdl'], 'year' => $year));
		}
	}else{
		foreach ($arr as $key) {
			if(!in_array((int)$key['yr'], $result))
				array_push($result, $key['yr']);
		}
	}

    echo json_encode($result);

    return $response;
});