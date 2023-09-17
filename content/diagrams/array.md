---
title: "Array Flows"
draft: true
# weight: 300
tags:
  - sms
# geekdocNav: false
geekdocBreadcrumb: false
---

## Messaging API

{{< mermaid class="text-center">}}
sequenceDiagram
Array ATS->>Twilio Messaging API: POST<br>{From, To, Body}
Twilio Messaging API->>Applicant: Outgoing SMS
Applicant->>Twilio Messaging API: Incoming SMS Reply
Twilio Messaging API->>Array ATS: Webhook
{{< /mermaid >}}

<br>
<br>
<br>
<br>
<br>

## Bot Flow

{{< mermaid class="text-center">}}
sequenceDiagram
Array ATS->>Twilio Studio Flow: POST<br>{From, To, Params}
Twilio Studio Flow->>Applicant: Outgoing SMS<br>Are you interested?
Applicant->>Twilio Studio Flow: Incoming SMS Reply<br>Yes
Note over Twilio Studio Flow: Studio Flow evaluates reply,<br>then POSTs result to Array ATS
Twilio Studio Flow->>Array ATS: POST<br>Applicant Response
{{< /mermaid >}}

<br>
<br>
<br>
<br>
<br>

## Conversations Flow

{{< mermaid class="text-center">}}
sequenceDiagram
Array ATS->>Twilio Function: POST<br>{From, To, Params}
Twilio Function->>Twilio Conversations API: Create Conversation
Twilio Conversations API->>Frontline: Recruiter and Candidate<br>engage in a conversation<br>in Frontline
{{< /mermaid >}}
