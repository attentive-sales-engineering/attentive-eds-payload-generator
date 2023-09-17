---
title: "Test Authentication"
draft: false
weight: 100
tags:
  - authentication
# geekdocNav: false
geekdocBreadcrumb: false
---

Use the Test Authentication endpoint to test your unique token that you received from Attentive. Make sure to save your token because all API requests are authenticated using bearer tokens. The response should include information specific to your company.

{{< tabs "test" >}}

{{< tab "ME" >}}
Make a call to this endpoint to test your unique token that you generate in the Attentive product.
{{< api-explorer id=`me` file=`./params/me.js` >}}
{{< /tab >}}

{{< /tabs >}}
