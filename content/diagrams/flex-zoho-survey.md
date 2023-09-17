---
title: "Flex + Zoho EHR Survey Flow"
draft: true
# weight: 300
tags:
  - sms
# geekdocNav: false
geekdocBreadcrumb: false
---

## Automated Survey Message

{{< mermaid class="text-center">}}
sequenceDiagram
Zoho EHR->>Twilio Studio: Zoho workflow webhook
Note right of Zoho EHR: Agent completes interaction with client
Twilio Studio->>Client: SMS Survey
Note right of Twilio Studio: Send SMS survey and wait for reply
Client->>Twilio Studio: SMS Reply
Twilio Studio->>Zoho EHR: Record survey response in Zoho EHR
{{< /mermaid >}}
