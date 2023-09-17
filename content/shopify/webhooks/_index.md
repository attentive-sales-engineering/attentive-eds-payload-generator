---
title: "Webhooks"
draft: true
weight: 1000
tags:
  - subscribers
# geekdocNav: false
geekdocBreadcrumb: false
---

{{< expand "Use the Subscribers API to manage subscriptions. With this API, you can programmatically subscribe and unsubscribe users from subscriptions...." >}}
Notes:
 
- A legal disclosure is required when a user is opted-in programmatically.
  - For marketing messages, required legal language must be included.
  - For transactional messages, you must include a transactional opt-in unit.
- By default, if a subscription already exists, it will try and record the attempt to create the subscription again. For TEXT subscriptions, this will result in a message being sent to the person indicating that they are already subscribed.{{< /expand >}}

{{< tabs "webhooks" >}}

{{< tab "GET" >}}
Retrieve a list of Webhooks
{{< api-explorer id=`get` file=`./params/get.js` >}}
{{< /tab >}}

{{< tab "GET SINGLE" >}}
Receive a single Webhook
{{< api-explorer id=`get-single` file=`./params/get-single.js` >}}
{{< /tab >}}

{{< tab "GET COUNT" >}}
Receive a count of all Webhooks
{{< api-explorer id=`get-count` file=`./params/get-count.js` >}}
{{< /tab >}}

{{< tab "POST" >}}
Create a new Webhook
{{< api-explorer id=`post` file=`./params/post.js` >}}
{{< /tab >}}

{{< tab "PUT" >}}
Modify an existing Webhook
{{< api-explorer id=`put` file=`./params/put.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
Unsubscribe subscriptions for a user
{{< api-explorer id=`delete` file=`./params/delete.js` >}}
{{< /tab >}}

{{< /tabs >}}
