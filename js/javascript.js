deleteBtn = document.getElementById("deleteBtn");

$.ajax({
  url: "/../backEnd/listProducts.php",
  type: "GET",
  success: function(result) {
    let response = JSON.parse(result);
    if (response.success == 1) {
      let data = [response.type];
      for (i = 0; i < data.length; i++) {
        data[i].forEach(data => {
          let cardsDiv = document.getElementById("cardsDiv");
          let cards = document.createElement("div");
          cards.setAttribute("id", `${data["id"]}`);
          cards.classList.add("card-1", "flex-grow-0", "flex-shrink-1", "m-2");
          cards.innerHTML = `
            <div class="card border-info text-center" style="min-width: 15rem;">
              <input class="form-check-input checkBox d-inline-block mt-2 ml-2" type="checkbox" id="${data["id"]}">
              <div id="cardBody" class="card-body text-info">
                <p class="card-text mb-0">${data["sku"]}</p>
                <p class="card-text mb-0 text-uppercase">${data["pr_type"]}</p>
                <p class="card-title font-weight-bold text-capitalize">${data["name"]}</p>
                <p class="card-text mb-0">$ ${data["price"]}</p>
                <label for="dimension" class="font-weight-bold text-capitalize">
                  dimensions: <span id="dimension" class="card-text mb-0 ml-0 inline-block">${data["dimensions"]}</span>
                </label>
                <label for="size" class="font-weight-bold text-capitalize">
                  size: <span id="size" class="card-text mb-0 ml-0 inline-block">${data["size"]}</span> mb
                </label>
                <label for="weight" class="font-weight-bold text-capitalize">
                  weight: <span id="weight" class="card-text mb-0 ml-0 inline">${data["weight"]}</span> Kg
                </label>
              </div>
            </div>`;
          cardsDiv.appendChild(cards);
        });
      }
      
      let spans = document.getElementById("cardsDiv").querySelectorAll("span");
      let labels = document.getElementById("cardsDiv").querySelectorAll("label");

      for (let i = 0; i < spans.length; i++) {
        let span = spans[i];
        let label = labels[i];
        
        if (span.innerHTML === 'null') {
          span.classList.add("d-none");
          label.classList.add("d-none");
        }
      }
    }
  }
});

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let checked = document.querySelectorAll(".checkBox:checked");
  if (checked.length === 0) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Oops...",
      text: "No items selected!",
      timer: 1000,
    });
    return;
  }
  else {
    Swal.fire({
      title: "Are you sure you want to delete these items ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        let productsDelete =Array();
        let list = document.querySelectorAll(".checkBox:checked")
        for(i = 0; i < list.length; i++)
        {
          productsDelete.push(list[i].id);
        }
        $.ajax({
          url: "../backEnd/deleteProducts.php",
          type: "POST",
          data: { id: productsDelete },
        }).done(function (response) {
          let responseObject = JSON.parse(response);
          let success = responseObject.success;
          if(success == 1) {
            location.reload();
          }
          else if(success == 0)
          {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              timer: 1200,
            });
          }
        });
      }
    });
  }
});
