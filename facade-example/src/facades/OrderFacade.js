// src/facades/OrderFacade.js
const InventorySystem = require('../subsystems/InventorySystem');
const PaymentSystem = require('../subsystems/PaymentSystem');
const ShippingSystem = require('../subsystems/ShippingSystem');

class OrderFacade {
    constructor() {
        this.inventorySystem = new InventorySystem();
        this.paymentSystem = new PaymentSystem();
        this.shippingSystem = new ShippingSystem();
    }

    placeOrder(orderId, productId, quantity, amount, address) {
        console.log(`Processing order ${orderId}...`);

        // Paso 1: Verificar inventario
        const isInStock = this.inventorySystem.checkStock(productId, quantity);
        if (!isInStock) {
            console.log(`Order ${orderId} failed: Insufficient stock`);
            return { success: false, message: 'Insufficient stock' };
        }

        // Paso 2: Reservar inventario
        const isReserved = this.inventorySystem.reserveStock(productId, quantity);
        if (!isReserved) {
            console.log(`Order ${orderId} failed: Could not reserve stock`);
            return { success: false, message: 'Could not reserve stock' };
        }

        // Paso 3: Procesar pago
        const isPaid = this.paymentSystem.processPayment(orderId, amount);
        if (!isPaid) {
            console.log(`Order ${orderId} failed: Payment failed`);
            return { success: false, message: 'Payment failed' };
        }

        // Paso 4: Coordinar envío
        const trackingNumber = this.shippingSystem.arrangeShipping(orderId, address);
        console.log(`Order ${orderId} placed successfully! Tracking number: ${trackingNumber}`);
        return { success: true, trackingNumber };
    }
}

module.exports = OrderFacade;