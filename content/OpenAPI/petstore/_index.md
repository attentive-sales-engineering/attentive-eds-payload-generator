---
title: "Petstore"
draft: true
# weight: 200
tags:
  - addresses
# geekdocNav: false
geekdocBreadcrumb: false
---

Create and manage addresses.

{{< tabs "addresses" >}}

{{< tab "POST" >}}
Add a new pet to the store.
{{< api-explorer id=`post` file=`./params/post.js` >}}
{{< /tab >}}

{{< tab "PUT" >}}
Update an existing pet.
{{< api-explorer id=`put` file=`./params/put.js` >}}
{{< /tab >}}

{{< tab "UPDATE" >}}
Update an existing pet.
{{< api-explorer id=`update` file=`./params/update.js` >}}
{{< /tab >}}

{{< tab "GET" >}}
Find pet by ID.
{{< api-explorer id=`get` file=`./params/get.js` >}}
{{< /tab >}}

{{< tab "STATUS" >}}
Finds Pets by status.
{{< api-explorer id=`status` file=`./params/status.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
Deletes a pet.
{{< api-explorer id=`delete` file=`./params/delete.js` >}}
{{< /tab >}}

{{< /tabs >}}
