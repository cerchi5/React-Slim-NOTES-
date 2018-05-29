<?php

$app->get('/graph/{id}', function ($request, $response, $args) use ($db){

	$id = $args['id'];
	$result = getPlotData($db,$id);

	return json_encode($result);
});


// SELECT [group_concat()]json_object("id",id,"column1",nameOfColumn1) FROM pw.finalproject;
// SELECT concat('[', group_concat(json_object("id",id,"column1",nameOfColumn1)), ']' ) FROM pw.finalproject;

$app->get('/function/{id}', function ($request, $response, $args) use ($db){

	$id = $args['id'];
	$result = getPlotFunction($db,$id);

	return json_encode($result);
});

$app->put('/graph/{fct}/{term}/{output}', function ($request,$response, $args) use ($db){

    $id = createPlotEntry ($db,$args['fct'],$args['term'],$args['output']) ;
    echo "sdsa";
    return json_encode(array("response" => array("id" => $id) ) ) ;
});

$app->post('/graph/{id}/function/{fntype}', function ($request, $response, $args) use($db){
    $id = $args['id'];
    $fn = $args['fntype'];
    $rsp = updatePlotFunction ($db, $id, $fn) ;
    return json_encode(array("response" => $rsp)) ;
});

$app->post('/graph/{id}/terminal/{term}', function ($request, $response, $args) use($db){
    $id = $args['id'];
    $tr = $args['term'];
    $rsp = updatePlotTerminal ($db, $id, $tr) ;
    return json_encode(array("response" => $rsp)) ;
});

$app->delete('/remove/{id}', function ($request, $response, $args) use($db){
    $id = $args['id'];
    $rsp = deletePlot ($db, $id) ;
    return json_encode(array("response" => $rsp)) ;
});
