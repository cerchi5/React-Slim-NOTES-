<?php

$app->delete('/delete/{name}', function ($request, $response, $args) use ($arr,$db){

	$name = $args['name'];

	foreach ($arr as $key) {
		if(strcmp($key['name'],$name) == 0){
			$sql = "DELETE FROM pw.dataset WHERE name = '".$name."';";
			if($db->query($sql) === TRUE){
				return "SUCCES";
			}else return "ERROR: ".$db->error;
		}
	}
});

