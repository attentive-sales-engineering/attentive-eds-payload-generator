---
title: "Ticketmaster Flow"
draft: false
# weight: 300
tags:
  - sms
# geekdocNav: false
geekdocBreadcrumb: false
---

## Third-Party Cookie ID (tpc_id) 

An `tpc_id` cookie will be created by the `attentive.com` domain during the sign-up unit process. When `ticketmaster.com` fetches an image from the `attentive.com` domain the cookies belonging to that domain will be passed in the header of the GET request when requesting the image. The `attentive.com` server can inspect the cookie to determine the user and transform the request into a Custom Events API request.

{{< mermaid class="text-center">}}
sequenceDiagram
example.com->>attentive.com: Subscriber completes<br>Sign-up Unit
Note right of example.com: attentive.com domain returns<br>cookie: tpc_id
attentive.com->>example.com: 
example.com->>ticketmaster.com: Subscriber visits ticketmaster.com
ticketmaster.com->>attentive.com: GET attentive.com/image.jpg
Note right of attentive.com: ticketmaster.com fetches image from attentive.com<br>Header includes tpc_id cookie.<br>Querystring includes API Key,<br>Event Type and Custom Properties:<br>?apiKey=xyz456<br>&type=Ticket%20Purchase<br>&eventId=abc123<br>&amount=$499
attentive.com->>api.attentive.com: POST /events/custom
Note left of api.attentive.com: attentive.com transforms cookie and params<br>into Custom Event API request:<br>authorization: Bearer apiKey<br>type: "Ticket Purchase",<br>user: tpc_id cookie,<br>properties: {eventID: "abc123",<br>amount: "$499"}
{{< /mermaid >}}

