export const orders = JSON.parse(localStorage.getItem('orders')) || [];


export function addOrder(newOrders)
{
    orders.unshift(newOrders);
    saveToStorage();
}

function saveToStorage()
{
    localStorage.setItem('orders' , JSON.stringify(orders));
}

