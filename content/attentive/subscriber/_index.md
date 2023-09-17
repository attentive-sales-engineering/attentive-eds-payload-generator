---
title: "Subscribe"
draft: false
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

{{< tab "SUBSCRIBE" >}}
Subscribe user
{{< api-explorer id=`subscribe` file=`./params/subscribe.js` >}}
{{< /tab >}}

{{< /tabs >}}
