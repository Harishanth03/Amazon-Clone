import { products } from "../data/products.js";

import { cart , addToCart , calculateCartQuantity } from "../data/cart.js";

import { formatCurrency } from "./utils/money.js";

//============================ We need to create a loop throw an array for genegrate the HTML for every product ======================

// when every time loop works every product comes to function and generate the HTML

let productHtml = ''; // its initialize outside the loop because everytime when loop works its should be empty string

products.forEach(products => {

    // += acually every time loops works the HTMl append to the existing html for create a list of product
    productHtml += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(products.priceCents / 100)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id = "${products.id}">
            Add to Cart
          </button>
        </div>
    `
});

document.querySelector('.js-product-grid').innerHTML = productHtml; 



//select all button throw querySelectorAll then create a foreach loop for button and set the button as parameter
document.querySelectorAll('.js-add-to-cart').forEach((button) => {

    // create a event listner for all button

    button.addEventListener('click', () => {

      const productId = button.dataset.productId;

      addToCart(productId);

      updateCartQuantity();   

    });

});

console.log(cart);

function updateCartQuantity()
{
  const cartQuantity = calculateCartQuantity();

  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
};

updateCartQuantity();






