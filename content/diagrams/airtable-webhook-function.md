---
title: "Airtable webhook function"
draft: true
# weight: 50
tags:
  - sms
# geekdocNav: false
geekdocBreadcrumb: false
---

{{< mermaid>}}
sequenceDiagram
Webhook->>Function: statusCallback
Function->>Messaging API: GET message
Messaging API-->>Function: {message}
Function->>Airtable: Post message
Note over Airtable: Append message to sheet
Function->>SendGrid API: Post message
Note over SendGrid API: Send email to distribution list
{{< /mermaid >}}