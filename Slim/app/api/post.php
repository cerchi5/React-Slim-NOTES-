<?php

$app->post('/update/{name}/link/{link}', function ($request, $response, $args) use ($arr,$db){

	$name = $args['name'];
	$link = $args['link'];

	foreach ($arr as $key) {
		if(strcmp($key['name'],$name) == 0){
			$sql = "UPDATE pw.dataset SET url = '".$link."' WHERE nm = '".$name."';";
			if($db->query($sql) === TRUE){
				return "SUCCES";
			}else return "ERROR: ".$db->error;
		}
	}
});

$app->post('/update/{name}/address/{address}', function ($request, $response, $args) use ($arr,$db){

	$name = $args['name'];
	$address = $args['address'];

	foreach ($arr as $key) {
		if(strcmp($key['name'],$name) == 0){
			$sql = "UPDATE pw.dataset SET ad = '".$address."' WHERE nm = '".$name."';";
			if($db->query($sql) === TRUE){
				return "SUCCES";
			}else return "ERROR: ".$db->error;
		}
	}
});

$app->post('/update/{name}/country/{country}', function ($request, $response, $args) use ($arr,$db){

	$name = $args['name'];
	$country = $args['country'];

	foreach ($arr as $key) {
		if(strcmp($key['name'],$name) == 0){
			$sql = "UPDATE pw.dataset SET ct = '".$country."' WHERE nm = '".$name."';";
			if($db->query($sql) === TRUE){
				return "SUCCES";
			}else return "ERROR: ".$db->error;
		}
	}
});