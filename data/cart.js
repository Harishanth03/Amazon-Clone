export const cart = [];

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
            matchingItem.quantity += 1;
        }
        else
        {
            cart.push({

                productId : productId,
    
                quantity : 1
            });
        }
}