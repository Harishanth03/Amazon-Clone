
import { renderCheckoutHeader } from "./CheckOut/checkoutheader.js";

import { rendorOrderSummery } from "../Scripts/CheckOut/orderSummary.js";

import { renderPaymentSummary } from "./CheckOut/paymentSummary.js";

import { loadProducts } from "../data/products.js";

//import '../data/backend-practice.js';
loadProducts(() => {
    
    renderCheckoutHeader();

    rendorOrderSummery();

    renderPaymentSummary();
})
