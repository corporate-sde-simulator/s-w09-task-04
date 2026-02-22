/**
 * Cart Formatter — formats cart data for display. Clean helper.
 */

class CartFormatter {
    static formatCurrency(amount) {
        return '$' + amount.toFixed(2);
    }

    static formatReceipt(summary) {
        let lines = ['=== RECEIPT ==='];
        for (const item of summary.items) {
            lines.push(item.name + ' x' + item.quantity + ' @ ' +
                       CartFormatter.formatCurrency(item.price));
        }
        lines.push('---');
        lines.push('Subtotal: ' + CartFormatter.formatCurrency(summary.subtotal));
        if (summary.discount) {
            lines.push('Discount: ' + summary.discount.code);
        }
        lines.push('Total: ' + CartFormatter.formatCurrency(summary.total));
        return lines.join('\n');
    }
}

module.exports = CartFormatter;
