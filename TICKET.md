# DEVTOOLS-102: Add Test Coverage for Shopping Cart Module

**Status:** In Progress · **Priority:** Medium
**Sprint:** Sprint 30 · **Story Points:** 5
**Reporter:** Sarah Kim (QA Lead) · **Assignee:** You (Intern)
**Labels:** `testing`, `javascript`, `tdd`
**Task Type:** Feature Ship

---

## Description

The `shoppingCart.js` module has ZERO test coverage. It was written 6 months ago and
has been running in production without tests. QA has been testing manually, but we need
automated tests before we can safely refactor it.

**The code works correctly.** Your job is not to fix bugs — it's to write tests.

## Requirements

Write tests that cover:
- Adding items to cart
- Removing items from cart
- Calculating subtotal
- Applying discount codes (percentage and flat)
- Handling edge cases (empty cart, negative quantities, invalid discount)
- Cart quantity limits (max 99 per item)

## Acceptance Criteria

- [ ] Minimum 10 test cases
- [ ] Cover all public methods
- [ ] Cover at least 3 edge cases
- [ ] All tests pass
- [ ] Tests use descriptive names
