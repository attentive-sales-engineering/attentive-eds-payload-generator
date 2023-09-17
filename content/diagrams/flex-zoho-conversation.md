---
title: "Flex + Zoho EHR Conversation Flow"
draft: true
# weight: 300
tags:
  - sms
# geekdocNav: false
geekdocBreadcrumb: false
---

## Outgoing Conversation

{{< mermaid class="text-center">}}
sequenceDiagram
Zoho EHR->>Twilio Conversations: Zoho workflow webhook
Note right of Zoho EHR: Appointment scheduled in Zoho EHR
Twilio Conversations->>Client: Send SMS
Note right of Twilio Conversations: Conversation created
Client->>Twilio Conversations: SMS Reply
Note left of Client: Reply added to conversation
Twilio Conversations->>Flex: Entire conversation routed to Flex Agent
Flex->>Client: Agent replies to Client
Note left of Flex: Agent and Client engage in conversation
{{< /mermaid >}}