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
    console.log(productData);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="col">
    <div class="card h-100">
      <img src="${productData.image}" width="300px" class="img-thumbnail d-block mx-auto mt-3" alt="${productData.phone_name}">
      <div class="card-body">
        <h5 class="card-title">${productData.phone_name}</h5>
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
  console.log(phoneId);
}