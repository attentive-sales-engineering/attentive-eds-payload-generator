---
title: "CSE Insurance Flows"
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
Website->>CSE Backend: Customer Login
Note over CSE Backend: Generate MFA code
Note over CSE Backend: Specify "From" address
CSE Backend->>Twilio Messaging API: POST<br>{From, To, Body}
Twilio Messaging API->>Customer Phone: Outgoing: OTP
Customer Phone-->>Website: 
Website->>CSE Backend: Customer enters OTP<br>on website
Note over CSE Backend: Evaluate user+OTP<br>and implement MFA Logic
CSE Backend->>Website: Authenticate user
{{< /mermaid >}}

<br>


## Verify API

{{< mermaid class="text-center">}}
sequenceDiagram
Website->>CSE Backend: Customer Login
CSE Backend->>Twilio Verify API:POST<br>{To, Channel}
Note over Twilio Verify API: Generate MFA code
Note over Twilio Verify API: Send OTP on<br>best "From" channel
Twilio Verify API->>Customer Phone: Outgoing: OTP
Customer Phone-->>Website: 
Website->>CSE Backend: Customer enters OTP<br>on website
CSE Backend->>Twilio Verify API:POST<br>{To, OTP}
Note over Twilio Verify API: Evaluate To+OTP<br>and implement MFA Logic.<br>Retry other channels if necessary.
Twilio Verify API ->> CSE Backend: {Approved}
CSE Backend->>Website: Authenticate user
{{< /mermaid >}}
