<?php
$ciudades_json = file_get_contents('ciudades.json');
$ciudades = json_decode($ciudades_json, true);
$input = $_GET['input'];
$sugerencias = [];

foreach ($ciudades as $ciudad) {
    if (strpos(strtolower($ciudad), strtolower($input)) === 0) {
        $sugerencias[] = $ciudad;
    }
}
echo json_encode($sugerencias);
?>