---
title: "Status Callbacks"
draft: true
# weight: 300
tags:
  - sms
# geekdocNav: false
geekdocBreadcrumb: false
---

## SMS From Phone Number = 'Queued' status

{{< mermaid class="text-center">}}
sequenceDiagram
Owlibaba->>Twilio: {message}
Twilio-->>Owlibaba: Queued
Twilio->>Carrier: {message}
Carrier-->>Owlibaba: Sent
Carrier->>Mobile: {message}
Mobile-->>Owlibaba: Delivered
{{< /mermaid >}}

<br><br>

## Messaging Service From = 'Accepted' status

{{< mermaid>}}
sequenceDiagram
Owlibaba->>Twilio API: { message }
Twilio API-->>Owlibaba: Accepted
Twilio API->>Messaging Service: { message }
Messaging Service-->>Owlibaba: Queued
Note over Messaging Service: Select Sender
Messaging Service->>Carrier: { message }
Carrier-->>Owlibaba: Sent
Carrier->>Consumer: { message }
Consumer-->>Owlibaba: Delivered
{{< /mermaid >}}

<br><br>

## WhatsApp 'Read' status

{{< mermaid class="text-center">}}
sequenceDiagram
Owlibaba->>Twilio: {message}
Twilio-->>Owlibaba: Queued
Twilio->>Meta: {message}
Meta-->>Owlibaba: Sent
Meta->>WhatsApp: {message}
WhatsApp-->>Owlibaba: Delivered
WhatsApp->>Human: {message}
Human-->>Owlibaba: Read
{{< /mermaid >}}


<br><br>

## Status Callback Errors

{{< mermaid class="text-center">}}
sequenceDiagram
Owlibaba->>Twilio: {message}
Note left of Twilio: Preflight errors
Twilio->>Carrier/Mobile: {message}
Note right of Twilio: Postflight errors
{{< /mermaid >}}

