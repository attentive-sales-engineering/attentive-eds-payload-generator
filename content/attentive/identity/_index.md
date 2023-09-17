---
title: "Identity"
draft: false
weight: 1000
tags:
  - privacy
# geekdocNav: false
geekdocBreadcrumb: false
---

{{< expand "Use the Identity API to manage user identifiers..." >}}
With this API, you can programmatically add a client user identifier or custom identifier(s) to a user.

Make a call to this endpoint to associate a client user identifier or custom identifier(s) with other identifiers. A client user or custom identifier needs to be accompanied by at least one other identifier of the following types: phone, email, shopify id, klaviyo id, client user identifier, or custom identifier.
{{< /expand >}}

{{< tabs "events" >}}
 
{{< tab "ADD IDENTIFIER" >}}
Add a client user identifier or custom identifier(s) to a user
{{< api-explorer id=`add` file=`./params/add.js` >}}
{{< /tab >}}

{{< /tabs >}}
