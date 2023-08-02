<?php
require '../vendor/autoload.php';
class ProductAdd extends Dbh
{
    public function adding($product)
    {
        $pdo = $this->connect();
        $sku = $product->getSku();
        $name = $product->getName();
        $price = $product->getPrice();
        
        if (($product instanceof Product)) {
            $type = $product->getTypeOfProduct();
            $size = $product->getSize();
            $weight = $product->getWeight();
            $dimensions = $product->getDimensions();
        
            $sql = "INSERT INTO products (sku, name, price, product_type_id, size, weight, dimensions)
                    VALUES (:sku, :name, :price, :type, :size, :weight, :dimensions)";
            
            $statement = $pdo->prepare($sql);
            if ($statement->execute([
                'sku' => $sku,
                'name' => $name,
                'price' => $price,
                'type' => $type,
                'size' => $size,
                'weight' => $weight,
                'dimensions' => $dimensions
            ])) 
            {
                header('location:/../index.php');
            }
        }
    }
}