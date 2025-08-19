// index.js
const OrderFacade = require('./src/facades/OrderFacade');

// Crear instancia de la fachada
const orderFacade = new OrderFacade();

// Probar un pedido exitoso
console.log('Attempting to place a valid order:');
const result1 = orderFacade.placeOrder(1, 'PROD001', 5, 100.00, '123 Main St');
console.log('Result:', result1);
console.log('---');

// Probar un pedido con inventario insuficiente
console.log('Attempting to place an order with insufficient stock:');
const result2 = orderFacade.placeOrder(2, 'PROD002', 15, 300.00, '456 Oak St');
console.log('Result:', result2);