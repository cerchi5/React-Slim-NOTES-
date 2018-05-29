<?php

$app->get('/categories', function ($request, $response, $args) {

    echo json_encode('Categories');

    return $response;
});