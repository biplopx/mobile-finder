const searchPhone = () => {
  const searchInput = document.getElementById('search-field');
  searchText = searchInput.value;
  searchInput.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
}

const displaySearchResult = resultData => {
  const productContainer = document.getElementById('product-container');
  productContainer.textContent = '';
  // search loop
  resultData.forEach(productData => {
    // console.log(productData);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="col">
    <div class="card h-100">
      <img src="${productData.image}" width="300px" class="img-thumbnail d-block mx-auto mt-3" alt="${productData.phone_name}">
      <div class="card-body">
        <h5 class="card-title fw-bold">${productData.phone_name}</h5>
        <p class="card-text">Brand: ${productData.brand}</p>
      </div>
      <div class="card-footer">
      <button onclick="loadPhoneDetails('${productData.slug}')" type="button" class="btn btn-primary d-block w-100">Details</button>
      </div>
    </div>
  </div>
    `;
    productContainer.appendChild(div);
  });
};

// Phone Details funtion

const loadPhoneDetails = phoneId => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetails(data.data))
}

const displayPhoneDetails = product => {
  console.log(product);
  const productDetails = document.getElementById('product-details');
  productDetails.textContent = '';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${product.image}" width="300px" class="img-thumbnail d-block mx-auto mt-3" alt="${product.phone_name}">
        <div class="card-body">
          <h2 class="fs-3 fw-bold">${product.name}</h2>
          <p><strong>Release Date:</strong> ${product.releaseDate}</p>
        <div class="m-3">
          <h4 style="font-size: 18px; text-align: left; font-weight: bold;">Main Features:</h4>
          <table class="table table-bordered">
            <tbody>

            <tr>
            <td colspan="2" style="text-align:left" class="bg-light fw-bold">Main Features:</td>
            </tr>

              <tr>
                  <td class="bg-light"><strong>Storage</strong></td>
                  <td>${product.mainFeatures.storage}</td>
              </tr>

              <tr>
              <td class="bg-light"><strong>Display Size</strong></td>
              <td>${product.mainFeatures.displaySize}</td>
              </tr>

              <tr>
              <td class="bg-light"><strong>Chipset</strong></td>
              <td>${product.mainFeatures.chipSet}</td>
              </tr>

              <tr>
              <td class="bg-light"> <strong>Memory</strong> </td>
                  <td>${product.mainFeatures.memory}</td>
              </tr>

              <tr>
              <td class="bg-light"> <strong>Sensor</strong> </td>
                  <td>${product.mainFeatures.sensors}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
  `;
  productDetails.appendChild(div);
}