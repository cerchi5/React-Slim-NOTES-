<?php

$app->get('/all[/{till}]', function ($request, $response, $args) use ($arr){

	if(isset($args['till']))
		$till = (int)$args['till'];

	if(isset($args['till']) && is_numeric($till)){
		$result = array();
		$c = 0;

		 foreach ($arr as $key) {
		 	if($c < $till){
		 		array_push($result, array('manu' => $key['manu'], 'model' => $key['mdl']) );
		 	}
		 	$c++;
		}
	}else{
		$result = array();
		foreach ($arr as $key) {
			array_push($result, array('manu' => $key['manu'], 'model' => $key['mdl']) );
		}
	}

	if(!isset($args['till']))
    	return json_encode($arr);
    else return json_encode($result);

});