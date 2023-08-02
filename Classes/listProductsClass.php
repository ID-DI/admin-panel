<?php
require '../vendor/autoload.php';

class ListProduct extends Dbh {

    public function getData() {
        $sql = "SELECT products.id, products.sku, products.name, products.price, products.size, products.weight, products.dimensions, product_type.name AS pr_type
                FROM products
                LEFT JOIN product_type ON products.product_type_id = product_type.id
                WHERE 1";
        $stmt = $this->connect()->query($sql);
        $result = array();
        while($row = $stmt->fetch()) {
            $result[] = $row;
        }
        echo json_encode(['type'=>$result,'success'=>1]);
    }

}