// first we need to save the data  into javascript so i created a array and into the array i created object to save the details.
const products = [

    {
        images : '../images/products/athletic-cotton-socks-6-pairs.jpg',

        name : 'lack and Gray Athletic Cotton Socks - 6 Pairs',

        rating : {
            
            stars : 4.5,

            count : 87
        },

        priceInCent : 1090
    },

    {
        images : '../images/products/intermediate-composite-basketball.jpg',

        name : 'Intermediate Size Basketball',

        rating : {
            
            stars : 4,

            count : 127
        },

        priceInCent : 2095
    },

    {
        images : '../images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',

        name : 'Adults Plain Cotton T-Shirt - 2 Pack',

        rating : {
            
            stars : 4.5,

            count : 65
        },

        priceInCent : 799
    },

];

//============================ We need to create a loop throw an array for genegrate the HTML for every product ======================

// when every time loop works every product comes to function and generate the HTML

let productHtml = ''; // its initialize outside the loop because everytime when loop works its should be empty string

products.forEach(product => {

    // += acually every time loops works the HTMl append to the existing html for create a list of product
    productHtml += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.images}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceInCent / 100).toFixed(2)}
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

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
    `
});

document.querySelector('.js-product-grid').innerHTML = productHtml;

