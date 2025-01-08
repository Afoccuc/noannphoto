<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>player count</title>
</head>
<body>
    
</body>
</html>

<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://publicapi.nationsglory.fr/hdv/coral/list', [
  'headers' => [
    'Authorization' => 'Bearer NGAPI_8rCgrKp$EKVS@6bvEaJJrtM1dS8(n8zKa7fcbd13bedb14d80a09b75c162e1e02',
    'accept' => 'application/json',
  ],
]);

echo $response->getBody();


?>