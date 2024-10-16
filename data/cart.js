export let cart;

loadLocalStorage();

export function loadLocalStorage()
{
  cart = JSON.parse(localStorage.getItem('cart'));

  if(!cart)
  {
    cart = [

      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    
        quantity: 2,

        deliveryOptionId : '1'
      },
    
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    
        quantity: 1,

        deliveryOptionId : '2'

      }
    
    ];
  };  
}

function saveToStorage()
{
  localStorage.setItem('cart', JSON.stringify(cart));
};

export function addToCart(productId)
{
  let matchingItem;

  cart.forEach(cartitems => 
  {

    if(productId === cartitems.productId)
    {
      matchingItem = cartitems;
    }

  });

  if(matchingItem)
  {
    // @ts-ignore
    matchingItem.quantity += 1;
  }
  else
  {
  cart.push({

    productId : productId,

    quantity : 1,

    deliveryOptionId : '1'

  });
  }

  saveToStorage();
}

export function removeCart(productId)
{
  const newCart = [];

  cart.forEach(cartitem => {
    if(cartitem.productId != productId)
    {
      newCart.push(cartitem);
    }
  });

  cart = newCart; 
  
  saveToStorage();

};



export function calculateCartQuantity()
{
  let cartQuantity = 0;
  
  cart.forEach(cartItem => {

    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
};

export function updateQuantity(productId, newQuantity) 
{
  let matchingItem = null;

  // Find the cart item by matching the productId
  cart.forEach(cartItem => 
  {

    if (cartItem.productId === productId) 
    {
      matchingItem = cartItem;
    }

  });

  // Check if the item was found before updating
  if (matchingItem) 
  {

    // @ts-ignore
    matchingItem.quantity = newQuantity;

    // Save the updated cart to storage (assuming saveToStorage persists the cart)
    saveToStorage();

  } 
  else 
  {

    console.error(`Product with ID ${productId} not found in the cart.`);

  }
};

//Create a function for update the delivery option and save it into the cart and make it interactive

export function updateDeliveryOption(productId , deliveryOptionId)
{
  
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId)
    {
      matchingItem = cartItem;
    };
  });
  
  // @ts-ignore
  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}

export function loadCart(callBack)
{
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load' , () => {

    console.log(xhr.response);

    callBack();
  })

  xhr.open('GET' , 'https://supersimplebackend.dev/cart');

  xhr.send();
}
