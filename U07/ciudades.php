<?php
$ciudades = array(
    "Madrid",
    "Barcelona",
    "Londres",
    "París",
    "Nueva York",
    "Tokio",
    "Roma",
    "Berlín",
    "Pekín",
    "Sídney"
);


$q = $_GET['q'];


$sugerencias = array_filter($ciudades, function($ciudad) use ($q) {
    return stripos($ciudad, $q) === 0;
});

echo json_encode(array_values($sugerencias));
?>