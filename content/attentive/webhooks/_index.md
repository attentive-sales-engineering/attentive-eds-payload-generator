---
title: "Webhooks"
draft: false
weight: 1000
tags:
  - webhooks
# geekdocNav: false
geekdocBreadcrumb: false
---

{{< expand "Create and manage Webhooks..." >}}
Events are a collection of strings of the following types:

- `sms.subscribed`
- `sms.sent`
- `sms.message_link_click`
- `email.subscribed`
- `email.unsubscribed`
- `email.message_link_click`
- `email.opened`
- `custom_attribute.set`

Event types are case sensitive.
{{< /expand >}}

{{< tabs "webhooks" >}}

{{< tab "LIST" >}}
List webooks
{{< api-explorer id=`list` file=`./params/list.js` >}}
{{< /tab >}}

{{< tab "CREATE" >}}
Create webhook
{{< api-explorer id=`create` file=`./params/create.js` >}}
{{< /tab >}}

{{< tab "DELETE" >}}
Delete webhook
{{< api-explorer id=`delete` file=`./params/delete.js` >}}
{{< /tab >}}

{{< tab "UPDATE" >}}
Update webhook
{{< api-explorer id=`update` file=`./params/update.js` >}}
{{< /tab >}}

{{< /tabs >}}
