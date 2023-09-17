---
title: "Architecture"
draft: true
# weight: 50
tags:
  - sms
# geekdocNav: false
geekdocBreadcrumb: false
---

## John Account

{{< mermaid>}}
flowchart LR
  direction LR
  subgraph A[John Acct]
      direction TB
      a1("John's Messaging Service:\n-Seattle\n-Portland\n-San Francisco\n-Toll-Free\n-London\n-Alpha")
  end
  subgraph B[Webhooks]
      direction LR
      b1("johnchaffee.ngrok.io:\n/incoming-msg\n/outgoing-msg")
  end
  subgraph C[Functions]
      direction LR
      c1{"/foo\n/bar\n/baz"}
  end
  subgraph D[Airtable]
    direction LR
    d1[(BASE db:\n-contacts\n-messages\n-orders\n-claims)]
  end
  A --> B --> C --> D
{{< /mermaid >}}

