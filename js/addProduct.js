const selectOption = document.getElementById('typeProducts');
const contentDiv = document.getElementById('contentDiv');
const addPage = document.getElementById('mainAdd');
const listPage = document.getElementById('mainList');
const navbarAdd = document.getElementById('navbarAdd');
const navbarList = document.getElementById('navbarList');
addBtn = document.getElementById("addBtn");

addBtn.addEventListener('click', function(){
  addPage.classList.remove('d-none');
  listPage.classList.add('d-none');
  navbarAdd.classList.remove('d-none');
  navbarList.classList.add('d-none');
  console.log('gej');
});

$.ajax({
  url: "/../../backEnd/listTypeOfProducts.php",
  type: "GET",
  success: function (result) {
    let response = JSON.parse(result);
    if (response.success == 1) {
      let data = [response.type];
      for (i = 0; i < data.length; i++) {
        let dataIn = data[i];
        let select = document.getElementById('typeProducts');
        for (j = 0; j < dataIn.length; j++) {
          let option = document.createElement('option');
          option.setAttribute('value', `${dataIn[j].name}`);
          option.classList.add('text-uppercase');
          option.innerHTML = `${dataIn[j].name}`;
          select.appendChild(option);
        }
      }
    }
  }
});


function checkSKU() {
  return new Promise((resolve, reject) => {
    let sku = document.getElementById('sku').value;

    $.ajax({
      url: "/../backEnd/listProducts.php",
      type: "GET",
      success: function(result) {
        let response = JSON.parse(result);
        if (response.success == 1) {
          let data = response.type;
          for (let i = 0; i < data.length; i++) {
            if (data[i].sku === sku) {
              showError("There is a product with that SKU id", "sku");
              reject();
              return;
            }
          }
          resolve();
        }
      },
      error: function() {
        reject();
      }
    });
  });
}



function validateInput(id) 
{
  const input = document.getElementById(id);
  const value = input.value.trim();
  showError('',id);
  if (value === '') 
  {
    showError('Please enter a value.',id);
    return false;
  }

  if (isNaN(value)) 
  {
    showError('Please, provide the data of indicated type.',id);
    return false;
  }

    return true;
}

function validateSkuName(id) 
{
  const input = document.getElementById(id);
  const value = input.value.trim();
  let regex = /^[a-zA-Z0-9\s]+$/;
  showError('',id);
  if (value === '' || value ==='none') 
  {
    showError('Please enter a value.',id);
    return false;
  }

  if(regex.test(value) == false)
  {
    showError('Please, provide the data of indicated type.',id);
    return false;
  }
  return true;
}

function showError(message,id) 
{
  const errorElement = document.getElementById('errorField'+id)
  errorElement.textContent = message;
}

function getProductAttribute(product) {
  let result;
  
  switch (product) {
    case 'dvd':
      result = validateInput('dvd');
      if (result) 
      {
        // const size = document.getElementById('dvd').value;
        document.getElementById('typeOfProduct').value = 'dvd';
      }
      else
      {
        return false;
      }
      return;
      
    case 'book':
      result = validateInput('book');
      if (result) {
        // const weight = document.getElementById('book').value;
        document.getElementById('typeOfProduct').value = 'book';
      }
      else
      {
        return false;
      }
      return;
      
    case 'furniture':
      const heightResult = validateInput('height');
      const widthResult = validateInput('width');
      const lengthResult = validateInput('length');
      
      if (heightResult && widthResult && lengthResult) 
      {
        // const height = document.getElementById('height').value;
        // const width = document.getElementById('width').value;
        // const length = document.getElementById('length').value;
        document.getElementById('typeOfProduct').value = 'furniture';
      }
      else
      {
        return false;
      }
      return;
      
    default:
      return null;
  }
}

selectOption.addEventListener('change', function () {
  const selectedOption = selectOption.value;
  if (selectedOption === 'none') {
    if (!contentDiv.classList.contains('d-none')) {
      contentDiv.classList.add('d-none');
    }
  }
  else if (selectedOption === 'dvd') {
    if (contentDiv.classList.contains('d-none')) {
      contentDiv.classList.remove('d-none');
    }
    document.getElementById('typeOfProduct').value = 'dvd';
    contentDiv.innerHTML = `
    <div class="form-group d-flex row align-items-center">
    <div class="col-md-12 my-2">
      <h5>Please provide size in megabytes</h5>
    </div>
      <div class="col-md-2">
          <label for="dvd" class="font-weight-bold text-capitalize">size:</label>
      </div>
      <div class="col-md-6 mr-auto">
          <input type="number" class="input form-control mb-2 mr-auto" id="dvd" name="size"
              placeholder=" MB" required>
              <span id="errorFielddvd" class=" text-danger font-weight-bold"></span>
      </div>
    </div> `;
  }
  else if (selectedOption === 'furniture') {
    if (contentDiv.classList.contains('d-none')) {
      contentDiv.classList.remove('d-none');
    }
    document.getElementById('typeOfProduct').value = 'furniture';
    contentDiv.classList.remove('form-group', 'd-flex', 'row', 'align-items-center');
    contentDiv.innerHTML = `
    <div class="form-group d-flex row align-items-center">
      <div class="col-md-12 my-2">
        <h5>Please provide dimensions in HxWxL format</h5>
      </div>
      <div class="col-md-2">
          <label for="height" class="font-weight-bold text-capitalize">height:</label>
      </div>
      <div class="col-md-6 mr-auto">
          <input type="number" class="input form-control mb-2 mr-auto" id="height" name="height"
              placeholder=" cm" required>
              <span id="errorFieldheight" class=" text-danger font-weight-bold"></span>
      </div>
    </div>
    <div class="form-group d-flex row align-items-center">
        <div class="col-md-2">
            <label for="width" class="font-weight-bold text-capitalize">width:</label>
        </div>
        <div class="col-md-6 mr-auto">
            <input type="number" class="input form-control mb-2 mr-auto" id="width" name="width"
                placeholder=" cm" required>
                <span id="errorFieldwidth" class=" text-danger font-weight-bold"></span>
        </div>
    </div>
    <div class="form-group d-flex row align-items-center">
        <div class="col-md-2">
            <label for="length" class="font-weight-bold text-capitalize">length:</label>
        </div>
        <div class="col-md-6 mr-auto">
            <input type="number" class="input form-control mb-2 mr-auto" id="length" name="length"
                placeholder=" cm" required>
                <span id="errorFieldlength" class=" text-danger font-weight-bold"></span>
        </div>
    </div>`;
  }
  else if (selectedOption === 'book') {
    if (contentDiv.classList.contains('d-none')) {
      contentDiv.classList.remove('d-none');
    }
    document.getElementById('typeOfProduct').value = 'book';
    contentDiv.innerHTML = `
    <div class="form-group d-flex row align-items-center">
    <div class="col-md-12 my-2">
      <h5>Please provide weight in kilograms</h5>
    </div>
      <div class="col-md-2">
          <label for="book" class="font-weight-bold text-capitalize">weight:</label>
      </div>
      <div class="col-md-6 mr-auto">
          <input type="number" class="input form-control mb-2 mr-auto" id="book" name="weight"
              placeholder=" kg" required>
              <span id="errorFieldbook" class=" text-danger font-weight-bold"></span>
      </div>
    </div>`;
  }
  else {
    contentDiv.textContent = 'Invalid option';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let saveButton = document.getElementById('saveBtn');
  saveButton.addEventListener('click', function (e) {
    e.preventDefault();
    const selectedOption = selectOption.value;
    if (!validateSkuName('sku')) 
    {
      return;
    }
    else if(!validateSkuName('name'))
    {
      return;
    }
    else if(!validateInput('price'))
    {
      return;
    }
    else if(!validateSkuName('typeProducts'))
    {
      return;
    }
    else if(getProductAttribute(selectedOption) === false)
    {
      return;
    }
   
    checkSKU()
    .then(() => {
      document.getElementById("newProductForm").submit();
    })
    .catch(() => {
      return;
    });

  });
});

let cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById("newProductForm").reset();
  window.location.assign("/../index.php");
});