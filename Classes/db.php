<?php

class Dbh {
    private $host = "127.0.0.1";
    private $user = "root";
    private $pwd = "";
    private $dbName = "dataBase";

    public function connect() {
        try 
        {
            $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbName .';';
            $pdo = new PDO($dsn, $this->user, $this->pwd);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            return $pdo;
        }
        catch (\PDOException $e)
        {
            $msg = date("Y-m-d H:i:s") . $e->getMessage();
            file_put_contents("log.txt", $msg . PHP_EOL, FILE_APPEND);
            header("Location:404.php");
            die();
        }
    }
}