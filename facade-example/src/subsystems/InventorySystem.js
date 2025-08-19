// src/subsystems/InventorySystem.js
class InventorySystem {
    checkStock(productId, quantity) {
        console.log(`Checking stock for product ${productId}, quantity: ${quantity}`);
        // Simulamos que el producto está en stock
        return quantity <= 10; // Suponemos que hay máximo 10 unidades disponibles
    }

    reserveStock(productId, quantity) {
        console.log(`Reserving ${quantity} units of product ${productId}`);
        return true;
    }
}

module.exports = InventorySystem;