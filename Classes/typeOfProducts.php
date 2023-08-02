<?php
require '../vendor/autoload.php';

class ListTypeOfProducts extends Dbh {

    public function getData() {
        $sql = "SELECT *
                FROM product_type
                WHERE 1";
        $stmt = $this->connect()->query($sql);
        $result = array();
        while($row = $stmt->fetch()) {
            $result[]=$row;
        }
        echo json_encode(['type'=>$result,'success'=>1]);
    }

    public function getTypeProduct($x) {
        $sql = "SELECT id
                FROM product_type
                WHERE name = :name";
        $stmt = $this->connect()->prepare($sql);
        $stmt->bindParam(':name', $x);
        $stmt->execute();
        $result = $stmt->fetch();
        return $result;
    }

}


