// src/subsystems/ShippingSystem.js
class ShippingSystem {
    arrangeShipping(orderId, address) {
        console.log(`Arranging shipping for order ${orderId} to address: ${address}`);
        // Simulamos que el envío se coordina correctamente
        return `TrackingNumber-${orderId}`;
    }
}

module.exports = ShippingSystem;