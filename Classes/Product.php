<?php
require '../vendor/autoload.php';

class Product extends AbstractProduct
{
    private $typeOfProduct;
    private $size;
    private $weight;
    private $dimensions;

    public function __construct($sku, $name, $price, $typeOfProduct, $size, $weight, $dimensions)
    {
        parent::__construct($sku, $name, $price);
        $this->typeOfProduct = $typeOfProduct;
        $this->size = $size;
        $this->weight = $weight;
        $this->dimensions = $dimensions;
    }

        /**
     * Get the value of type
     */ 
    public function getTypeOfProduct()
    {
        return $this->typeOfProduct;
    }

    /**
     * Set the value of type
     *
     * @return  self
     */ 
    public function setTypeOfProduct($typeOfProduct)
    {
        $this->typeOfProduct = $typeOfProduct;

        return $this;
    }

    /**
     * Get the value of size
     */ 
    public function getSize()
    {
        return $this->size;
    }

    /**
     * Set the value of size
     *
     * @return  self
     */ 
    public function setSize($size)
    {
        $this->size = $size;

        return $this;
    }

    /**
     * Get the value of weight
     */ 
    public function getWeight()
    {
        return $this->weight;
    }

    /**
     * Set the value of weight
     *
     * @return  self
     */ 
    public function setWeight($weight)
    {
        $this->weight = $weight;

        return $this;
    }

    /**
     * Get the value of dimensions
     */ 
    public function getDimensions()
    {
        return $this->dimensions;
    }

    /**
     * Set the value of dimensions
     *
     * @return  self
     */ 
    public function setDimensions($dimensions)
    {
        $this->dimensions = $dimensions;

        return $this;
    }

}
