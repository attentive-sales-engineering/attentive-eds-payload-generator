---
title: "eCommerce"
draft: false
weight: 1000
tags:
  - ecommerce
# geekdocNav: false
geekdocBreadcrumb: false
---

Use the eCommerce API to trigger an event when a user views a product, adds a product to their shopping cart, or makes a purchase.

{{< tabs "ecommerce" >}}

{{< tab "PRODUCT VIEW" >}}
Make a call to this endpoint when a user views a product.
{{< api-explorer id=`view` file=`./params/view.js` >}}
{{< /tab >}}

{{< tab "ADD TO CART" >}}
Make a call to this endpoint when a user adds a product to their shopping cart.
{{< api-explorer id=`add` file=`./params/add.js` >}}
{{< /tab >}}

{{< tab "PURCHASE" >}}
Make a call to this endpoint when a user generates an order or purchase.
{{< api-explorer id=`purchase` file=`./params/purchase.js` >}}
{{< /tab >}}

{{< /tabs >}}
