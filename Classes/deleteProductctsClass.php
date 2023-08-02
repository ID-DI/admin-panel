<?php
ob_start();
require '../vendor/autoload.php';
class ProductDelete extends Dbh
{
    public function deleting($ids)
    {
        $pdo = $this->connect();
        try {
            $sql = "DELETE FROM products WHERE id IN (" . implode(',', array_fill(0, count($ids), '?')) . ")";
            $stmt = $pdo->prepare($sql);
            foreach ($ids as $index => $id) {
                $stmt->bindValue(($index + 1), $id);
            }
            $stmt->execute();
            if($stmt->rowCount() > 0) 
            {
                echo json_encode(['success'=>1]);
            } 
            else 
            {
                echo json_encode(['success'=>0]);
            }
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
            return false;
        }
    }
}
ob_end_flush();