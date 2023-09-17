---
title: "Messages"
draft: false
weight: 1000
tags:
  - messages
  - text
# geekdocNav: false
geekdocBreadcrumb: false
---

{{< expand "Use the Identity API to manage user identifiers..." >}}
With the Messages API, you can either send a message or send messages in bulk.

Make calls to the [Messages API](https://docs.attentive.com/pages/api-reference/messages/#messages-api) to send both SMS and MMS messages to your subscribers. Before you begin, ensure that you're working with a member from our Client Strategy team or an engineer at Attentive to coordinate sending test messages with this API. Note that messages are sent using the shortcode assigned during the onboarding process.
{{< /expand >}}

{{< tabs "messages" >}}

{{< tab "SEND MESSAGE" >}}
Make a call to this endpoint to send a message to a subscriber.
{{< api-explorer id=`send` file=`./params/send.js` >}}
{{< /tab >}}

{{< tab "SEND SHORTLINK" >}}
Make a call to this endpoint to send a message to a subscriber.
{{< api-explorer id=`shortlink` file=`./params/shortlink.js` >}}
{{< /tab >}}

{{< tab "SEND BULK MESSAGES" >}}
Make a call to this endpoint to send messages in bulk to subscribers. Note that we do not accept batches of more than 1,000 messages at a time.
{{< api-explorer id=`bulk` file=`./params/bulk.js` >}}
{{< /tab >}}

{{< /tabs >}}
