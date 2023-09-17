---
title: "Frontline"
draft: true
# weight: 50
tags:
  - sms
# geekdocNav: false
geekdocBreadcrumb: false
---

## Frontline

{{< mermaid>}}
flowchart TB
    frontline("Frontline")
    auth("Auth0 SSO")
    conv("Conversation API")
    crm("Airtable CRM")
    func("Twilio Functions")
    cust("Customers")
    frontline <-- login --> auth
    frontline <-- "customers & templates" --> crm
    frontline <-- "messages" --> conv
    conv <-- "routing" --> func
    conv <-- messages --> cust
{{< /mermaid >}}
