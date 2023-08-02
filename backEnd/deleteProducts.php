<?php
ob_start();

require '../vendor/autoload.php';

$ids = $_POST['id'];
$deleteProduct = new ProductDelete();
$deleteProduct->deleting($ids);
ob_end_flush();
