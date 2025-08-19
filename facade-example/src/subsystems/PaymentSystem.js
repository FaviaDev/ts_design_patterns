// src/subsystems/PaymentSystem.js
class PaymentSystem {
    processPayment(orderId, amount) {
        console.log(`Processing payment for order ${orderId}, amount: $${amount}`);
        // Simulamos que el pago es exitoso
        return true;
    }
}

module.exports = PaymentSystem;