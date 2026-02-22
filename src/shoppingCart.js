/**
 * Shopping Cart Module — handles cart operations.
 * This code is CORRECT. Your job is to write tests for it.
 */

class ShoppingCart {
    constructor() {
        this.items = [];
        this.discountCode = null;
        this.MAX_QUANTITY = 99;
    }

    addItem(name, price, quantity = 1) {
        if (!name || typeof name !== 'string') {
            throw new Error('Item name is required');
        }
        if (price < 0) {
            throw new Error('Price cannot be negative');
        }
        if (quantity < 1 || quantity > this.MAX_QUANTITY) {
            throw new Error('Quantity must be between 1 and ' + this.MAX_QUANTITY);
        }

        const existing = this.items.find(i => i.name === name);
        if (existing) {
            const newQty = existing.quantity + quantity;
            if (newQty > this.MAX_QUANTITY) {
                throw new Error('Cannot exceed max quantity of ' + this.MAX_QUANTITY);
            }
            existing.quantity = newQty;
        } else {
            this.items.push({ name, price, quantity });
        }
    }

    removeItem(name) {
        const idx = this.items.findIndex(i => i.name === name);
        if (idx === -1) {
            throw new Error('Item not found in cart: ' + name);
        }
        this.items.splice(idx, 1);
    }

    updateQuantity(name, quantity) {
        const item = this.items.find(i => i.name === name);
        if (!item) {
            throw new Error('Item not found in cart: ' + name);
        }
        if (quantity < 1 || quantity > this.MAX_QUANTITY) {
            throw new Error('Quantity must be between 1 and ' + this.MAX_QUANTITY);
        }
        item.quantity = quantity;
    }

    getSubtotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    applyDiscount(code) {
        const discounts = {
            'SAVE10': { type: 'percent', value: 10 },
            'SAVE20': { type: 'percent', value: 20 },
            'FLAT5':  { type: 'flat', value: 5 },
            'FLAT15': { type: 'flat', value: 15 },
        };

        if (!discounts[code]) {
            throw new Error('Invalid discount code: ' + code);
        }
        this.discountCode = { code, ...discounts[code] };
    }

    getTotal() {
        let total = this.getSubtotal();
        if (this.discountCode) {
            if (this.discountCode.type === 'percent') {
                total -= total * (this.discountCode.value / 100);
            } else {
                total -= this.discountCode.value;
            }
        }
        return Math.max(0, Math.round(total * 100) / 100);
    }

    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    clear() {
        this.items = [];
        this.discountCode = null;
    }

    getSummary() {
        return {
            items: this.items.map(i => ({ ...i })),
            itemCount: this.getItemCount(),
            subtotal: this.getSubtotal(),
            discount: this.discountCode,
            total: this.getTotal(),
        };
    }
}

module.exports = ShoppingCart;
