// Define an array of products
const products = [
  {id: 1, name: 'Apple', price: 1.00},
  {id: 2, name: 'Cherry', price: 0.50},
  {id: 3, name: 'Black Plum', price: 1.50}
];

///////////////////////////
// To Display Products
///////////////////////////

const productsList = document.getElementById('product-list');

products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');
  productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to Cart</button>
  `;

  productsList.appendChild(productDiv);
});

//////////////////////
// Adding to cart
//////////////////////

