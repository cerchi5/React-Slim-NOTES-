<?php

$app->put('/add/{country}/{name}/{address}[/{link}]', function ($request, $response, $args) use ($arr,$db){
   
	$country = $args['country'];
	$name = $args['name'];
	$address = $args['address'];

	foreach ($arr as $key) {
		if(strcmp($key['name'],$name) == 0 && strcmp($key['address'],$address) == 0)
			return "ERROR";
			// echo "lool";
	}
	// echo "1";

	if(isset($args['link'])){
		$link = $args['link'];

		$sql = "INSERT INTO pw.dataset (ct, nm, ad, url) VALUES ('".$country."','".$name."','".$address."','".$link."')";

		if($db->query($sql) === TRUE){
			return "SUCCES";
		}else return "ERROR: ".$db->error;

		echo "2";
	}else{
		$sql = "INSERT INTO pw.dataset (ct, nm, ad, url) VALUES ('".$country."','".$name."','".$address."',' ')";

		if($db->query($sql) === TRUE){
			return "SUCCES";
		}else return "ERROR: ".$db->error;
		echo "3";
	}

	return json_encode(array("AAA" => 'aaa'));

});