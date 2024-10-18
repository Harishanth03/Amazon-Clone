
import { renderCheckoutHeader } from "./CheckOut/checkoutheader.js";

import { rendorOrderSummery } from "../Scripts/CheckOut/orderSummary.js";

import { renderPaymentSummary } from "./CheckOut/paymentSummary.js";

import { loadProducts } from "../data/products.js";

import { loadCart } from "../data/cart.js";


Promise.all([

    new Promise((resolve) => {

        loadProducts(() => {

            resolve();

        });
    }),
    new Promise((resolve) => {

        loadCart(() => {
            
            resolve();

        });
    })

]).then(() => {

    renderCheckoutHeader();

    rendorOrderSummery();

    renderPaymentSummary();

})
/*
new Promise((resolve) => {

    loadProducts(() => {

        resolve();
    });
}).then(() => {

    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() => {
    renderCheckoutHeader();

    rendorOrderSummery();

    renderPaymentSummary();
})*/

/*Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('value1');
        });
    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then(() => {
    renderCheckoutHeader();

    rendorOrderSummery();

    renderPaymentSummary();
})*/

/*new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    });
}).then((value) => {

    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    }).then(() => {
        renderCheckoutHeader();

        rendorOrderSummery();

        renderPaymentSummary();
    })
    loadCart()
})*/

//import '../data/backend-practice.js';
/*loadProducts(() => {
    
    loadCart(() => {
        
    renderCheckoutHeader();

    rendorOrderSummery();

    renderPaymentSummary();

    });

});*/


/*loadProducts(() => {

    loadCart(() => {
        renderCheckoutHeader();

        rendorOrderSummery();

        renderPaymentSummary();
    })
    
});*/
