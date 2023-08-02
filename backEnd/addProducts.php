<?php

require '../vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
    $sku = $_POST['sku'];
    $name = $_POST['name'];
    $price = $_POST['price'];
    $list = new ListTypeOfProducts();
    $x = $list->getTypeProduct($_POST['typeProducts']);
    $product_type_id = $x['id'];

    $size = isset($_POST['size']) ? $_POST['size'] : null;
    $weight = isset($_POST['weight']) ? $_POST['weight'] : null;

    $dimensions = null;
    if(isset($_POST['height']) && isset($_POST['width']) && isset($_POST['length']))
    {
        $dimensions =  $_POST['height'] . "x" . $_POST['width'] . "x" . $_POST['length']; 
    }

    $newProduct = new Product($sku, $name, $price, $product_type_id, $size, $weight, $dimensions);
    $addProduct = new ProductAdd();
    $addProduct->adding($newProduct);

}

