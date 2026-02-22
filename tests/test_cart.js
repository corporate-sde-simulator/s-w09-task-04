/**
 * Tests for Shopping Cart.
 * Run with: npx jest tests/ --verbose
 *
 * YOUR TASK: Write tests for every public method of ShoppingCart.
 * Aim for 10+ test cases including edge cases.
 *
 * TODO: Implement all tests below
 */

const ShoppingCart = require('../src/shoppingCart');

describe('ShoppingCart', () => {
    let cart;

    beforeEach(() => {
        cart = new ShoppingCart();
    });

    // TODO: Implement — test adding a single item
    test('add a single item', () => {
        // Your test here
    });

    // TODO: Implement — test adding duplicate item increases quantity
    test('adding same item increases quantity', () => {
        // Your test here
    });

    // TODO: Implement — test removing an item
    test('remove an item', () => {
        // Your test here
    });

    // TODO: Implement — test subtotal calculation
    test('calculate subtotal correctly', () => {
        // Your test here
    });

    // TODO: Implement — test percentage discount
    test('apply percentage discount', () => {
        // Your test here
    });

    // TODO: Implement — test flat discount
    test('apply flat discount', () => {
        // Your test here
    });

    // TODO: Implement — test empty cart subtotal
    test('empty cart has zero subtotal', () => {
        // Your test here
    });

    // TODO: Implement — test invalid discount code throws
    test('invalid discount code throws error', () => {
        // Your test here
    });

    // TODO: Implement — test negative price throws
    test('negative price throws error', () => {
        // Your test here
    });

    // TODO: Implement — test max quantity limit
    test('exceeding max quantity throws error', () => {
        // Your test here
    });

    // TODO: Implement (BONUS) — test total never goes below zero
    test('total never goes below zero with large discount', () => {
        // Your test here
    });
});
