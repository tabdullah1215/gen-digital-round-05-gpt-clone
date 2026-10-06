# CAT-214: Compare products from the catalogue

**Type:** Story · **Priority:** High · **Reporter:** Morgan Lee, Customer Experience

## Context
Shoppers currently have to open several product pages and remember the details
themselves. Customer Care wants a lightweight way to compare products from both
brands before a shopper chooses one.

## User story
As a shopper, I want to compare a couple of products side by side,
so I can make a faster, more informed choice from the catalogue.

## Acceptance criteria
1. Each catalogue card offers an accessible compare control. A shopper can add or
   remove a product without losing the card's product-page link, and the control
   makes its selected state clear.
2. A comparison tray appears when at least one product is selected. It shows the
   selected product's brand, category, one-time price, and key features. Removing
   an item updates the tray, and a clear action removes all selected products.
3. The comparison contains no more than two products. If a shopper tries to add a
   third, keep the existing selections and give a short status message. After an
   item is removed, another product can be selected.
4. **Stretch:** When exactly two products are compared, show a “Lower price” note
   only beside the product with the lower one-time price. Do not show it for equal
   prices.

## Out of scope
URL sharing, persistence, checkout or cart changes, filtering and sorting,
product data changes, and visual redesign.

Existing tests must keep passing; add tests for new behaviour.
