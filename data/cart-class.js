// @ts-ignore
class Cart
{
    cartItems;

    #localStorageKey;

    constructor(localStorageKey)
    {
        this.#localStorageKey = localStorageKey;
        this.#loadLocalStorage();
    }

    #loadLocalStorage()
    {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

        if(!this.cartItems)
        {
            this.cartItems = [

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

    saveToStorage()
    {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart(productId)
    {
        let matchingItem;

        this.cartItems.forEach(cartitems => 
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
        this.cartItems.push({

            productId : productId,

            quantity : 1,

            deliveryOptionId : '1'

        });
        }

        this.saveToStorage();
    }

    removeCart(productId)
    {
        const newCart = [];

        this.cartItems.forEach(cartitem => {
            if(cartitem.productId != productId)
            {
            newCart.push(cartitem);
            }
        });

        this.cartItems = newCart; 
        
        this.saveToStorage();

    }

    calculateCartQuantity()
    {
        let cartQuantity = 0;
        
        this.cartItems.forEach(cartItem => {

            cartQuantity += cartItem.quantity;
        });

        return cartQuantity;
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

    updateDeliveryOption(productId , deliveryOptionId)
    {
    
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId)
            {
                matchingItem = cartItem;
            };
        });
        
        if(matchingItem)
        {
            // @ts-ignore
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
        }
    };

};

const cartOop = new Cart('cart-oop');

const bussinesCart = new Cart('cart-business')

console.log(cartOop);

console.log(bussinesCart);



