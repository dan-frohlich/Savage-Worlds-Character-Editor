<?php
var_dump($_GET);

$data = file_get_contents('php://input');
print_r($data);
parse_str($data, $vars);
print_r($data);
print_r($vars);

?>