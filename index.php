<?php
require './vendor/autoload.php';

$generator = new HTML();
$bodyContent = '
<main>
<header>
    <div class="row d-none" id="navbarAdd">
        <div
            class="navbar navbar-expand-lg navbar-light bg-light col-md-12 border-btm d-flex justify-content-sm-between">
            <a class="navbar-brand d-inline-block text-capitalize">product add</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarContent">
                <button class="btn btn-outline-success mx-1 text-capitalize" id="saveBtn">save</button>
                <button class="btn btn-outline-danger mx-1 text-capitalize" id="cancelBtn">cancel</button>
            </div>
        </div>
    </div>
    <div class="row" id="navbarList">
        <div
            class="navbar navbar-expand-lg navbar-light bg-light col-md-12 border-btm d-flex justify-content-sm-between">
            <a class="navbar-brand d-inline-block text-capitalize">product list</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarContent">
                <button class="btn btn-outline-success mx-1" id="addBtn">Add</button>
                <button class="btn btn-outline-danger" id="deleteBtn">Mass delete</button>
            </div>
        </div>
    </div>
</header>

<div class="row" id="mainList">
    <div class="col-md-12 bg-color">
        <div id="containerCards" class="col-md-12 d-flex justify-content-center align-content-center flex-wrap">
            <div id="cardsDiv" class="d-flex justify-content-center align-content-center flex-wrap h-25">
            </div>
        </div>
    </div>
</div>

<div class="my-2 d-none" id="mainAdd">
    <form method="POST" action="./backEnd/addProducts.php" id="newProductForm" class="col-md-8 mx-auto mt-2">
    <span id="errorFieldnewProductForm" class="h2 text-danger font-weight-bold"></span>
        <div class="form-group d-flex row align-items-center">
            <div class="col-md-2">
                <label for="sku" class="font-weight-bold">SKU</label>
            </div>
            <div class="col-md-6 mr-auto">
                <input type="text" class="form-control mb-2 mr-auto" id="sku" name="sku"
                    placeholder="Enter unique SKU id">
                <span id="errorFieldsku" class=" text-danger font-weight-bold"></span>
            </div>
        </div>
        <div class="form-group d-flex row align-items-center">
            <div class="col-md-2">
                <label for="name" class="font-weight-bold">Name</label>
            </div>
            <div class="col-md-6 mr-auto">
                <input type="text" class="form-control mb-2 mr-auto" id="name" name="name" placeholder="Enter name">
                <span id="errorFieldname" class=" text-danger font-weight-bold"></span>
            </div>
        </div>
        <div class="form-group d-flex row align-items-center">
            <div class="col-md-2">
                <label for="price" class="font-weight-bold">Price</label>
            </div>
            <div class="col-md-6 mr-auto">
                <input type="number" class="form-control mb-2 mr-auto" id="price" name="price" placeholder="&#8364">
                <span id="errorFieldprice" class=" text-danger font-weight-bold"></span>
            </div>
        </div>
        <div class="form-group d-flex row align-items-center">
            <div class="col-md-2">
                <label for="typeProducts" class="font-weight-bold text-capitalize">type switcher</label>
            </div>
            <div class="col-md-6 mr-auto">
                <select class="form-control" id="typeProducts" name="typeProducts">
                    <option value="none">Select a product</option>
                </select>
                <span id="errorFieldtypeProducts" class=" text-danger font-weight-bold"></span>
            </div>
        </div>
        <div class="" id="contentDiv">

        </div>

        <input type="hidden" id="typeOfProduct" name="typeOfProduct">

    </form>
</div>
</main>
';
$html = $generator->generateHTML($bodyContent);
echo $html;
?>