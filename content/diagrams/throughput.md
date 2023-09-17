---
title: "Throughput"
draft: true
# weight: 400
tags:
  - sms
# geekdocNav: false
geekdocBreadcrumb: false
---

## Rate Limiting > Queueing > Throttling

{{< mermaid class="text-center">}}
flowchart LR
A[API Rate Limit<br>100 requests p/seond] -->
B[Queue Size<br>4 hours of messages] -->
C[Sender Type<br>MPS Throughput]
{{< /mermaid >}}

| Sender Type  | Throughput              | Max Queue Size                             |
| ------------ | ----------------------- | ------------------------------------------ |
| Long Code    | 1 Message per second    | 4 hrs \* 1 MPS = 14,400 msgs in queue      |
| Toll-Free    | 3 Messages per second   | 4 hrs \* 3 MPS = 43,200 msgs in queue      |
| Alpha Sender | 10 Messages per second  | 4 hrs \* 10 MPS = 144,000 msgs in queue    |
| Short Code   | 100 Messages per second | 4 hrs \* 100 MPS = 1,440,000 msgs in queue |

{{< hint  type=important >}}
If you exceed your queue size, you will receive a 429 error and the message will not be queued or sent.
{{< /hint >}}


<!-- ## Resources

{{< hint type=info icon=gdoc_link title=Links >}}
- [Rate Limits](https://wiki.hq.twilio.com/display/CSFP/Rate+Limits+and+Concurrency%3A+Voice%2C+SMS+and+API+Requests)
- [Segments](https://www.twilio.com/blog/2017/03/what-the-heck-is-a-segment.html)
- Carrier Filtering
  {{< /hint >}} -->
