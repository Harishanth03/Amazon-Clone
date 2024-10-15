import {cart} from '../../data/cart.js';

import {getProduct} from '../../data/products.js';

import { getDeliveryOption } from '../../data/deliveryOption.js';

import {formatCurrency} from '../utils/money.js';

export function renderPaymentSummary()
{
    let productPriceCents = 0;

    let shippingPriceCents = 0;

    let cartItemQuantity = 0;

    cart.forEach((cartItem) => {

        const product = getProduct(cartItem.productId);

        productPriceCents += product.priceCents * cartItem.quantity;

        cartItemQuantity += cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

        shippingPriceCents += deliveryOption.priceCents;
    });

    const totalBeforeTax = productPriceCents + shippingPriceCents

    const estimatedTex = totalBeforeTax * 0.1;

    const totalCents = totalBeforeTax + estimatedTex;

    const paymentSummaryHTML = 
    `
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (${cartItemQuantity}):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents) / 100}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPriceCents) / 100}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTax) / 100}</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(estimatedTex) / 100}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents) / 100}</div>
        </div>

        <button class="place-order-button button-primary">
            Place your order
        </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
};

renderPaymentSummary();




