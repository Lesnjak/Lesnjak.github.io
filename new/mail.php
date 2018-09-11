<?php

$param = json_decode($_REQUEST["param"]);
$result = "Результат: a = ".$param->a."; b = ".$param->b;
die($result);







