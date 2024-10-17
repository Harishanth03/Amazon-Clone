// @ts-ignore
class Cart // create a class for a Cart
{
    cartItems; //create a variable for cart items , array to hold itsms in the cart

    #localStorageKey; // create a private variable

    constructor(localStorageKey)  // create a constractor and get the localStorageKey throw the instance
    {
        this.#localStorageKey = localStorageKey; //constractor identity the cart with the given local storage key

        this.#loadLocalStorage(); // load existing cart items for load when page referesh
    }

    #loadLocalStorage() // create a private function for local storage 
    {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)); //get the cart items using the localStorage key (cart-oop or business-cart)

        if(!this.cartItems) //if cart items doesnt exist in the local storage define the default cart items
        {
            this.cartItems = [ // create an array for the cart items

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

    saveToStorage() // create a method for save the items in the cartItems.
    {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems)); // its update the cartitems against into the localstorage
    }

    addToCart(productId) // craete a method 4 add the items into the cart and set the parameter as a product id
    {
        let matchingItem; //create a variable for Add a new product to the cart or increase quantity if it already exists

        this.cartItems.forEach(cartitems =>  // create  a forEach loop for every cartitems and give the cart items as a arameter to the arrow function
        {

            if(productId === cartitems.productId) // check the product Id is Euqal to the existing cartItems product ID
            {
             matchingItem = cartitems; // if those two are same send the value of cartItems into the MatchingItems
            }

        });

        if(matchingItem) // if product already exist in the cart 
        {
            // @ts-ignore
            matchingItem.quantity += 1; // increate the quantity by one
        }
        else // else 
        {
        this.cartItems.push({ // send the 

            productId : productId, //Add the product with ID

            quantity : 1, //Set the initial quantity to 1

            deliveryOptionId : '1' // Set the default delivery option

        });
        }

        this.saveToStorage(); //Save the updated cart to localStorage
    }

    removeCart(productId) //create a method for remove the cartItem
    {
        const newCart = []; //create a empty array for save the updated quantity array

        this.cartItems.forEach(cartitem => { // Loop through each item in the cart

            if(cartitem.productId != productId) // Check if the productId of the current cart item does not match the one to be removed
            {

                newCart.push(cartitem);  // Add the current item to the 'newCart' array

            }

        });

         // If the productId matches, the item will not be added to 'newCart', effectively removing it.

        this.cartItems = newCart; //Replace the existing cart items with the updated 'newCart' , and its contains all the items except the one with the productId that was removed.
        
        this.saveToStorage(); //Save the updated cart back to localStorage to persist the changes

    }

    calculateCartQuantity() // Calculate the total quantity of all items in the cart
    {
        let cartQuantity = 0;
        
        this.cartItems.forEach(cartItem => {

            cartQuantity += cartItem.quantity; // Sum up the quantity of each item
        });

        return cartQuantity; // Return the total quantity
    }

    updateQuantity(productId, newQuantity) 
    {
        let matchingItem = null;

        // Find the cart item by matching the productId
        this.cartItems.forEach(cartItem => 
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
            this.saveToStorage();

        } 
        else 
        {

            console.error(`Product with ID ${productId} not found in the cart.`);

        }
    };

    updateDeliveryOption(productId , deliveryOptionId) //// Update the delivery option for a specific product
    {
    
        let matchingItem;

        this.cartItems.forEach((cartItem) => {

            if(productId === cartItem.productId)
            {

                matchingItem = cartItem; // If the product ID matches

            };
        });
        
        if(matchingItem) // If product exists in the cart
        {
            // @ts-ignore
            matchingItem.deliveryOptionId = deliveryOptionId; // Update the delivery option

            this.saveToStorage(); // Save the updated cart to localStorage
        }
    };

};

const cartOop = new Cart('cart-oop'); // Cart for general use

const bussinesCart = new Cart('cart-business'); // Cart for business use




