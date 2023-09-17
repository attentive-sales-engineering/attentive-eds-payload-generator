---
title: "Access Tokens"
draft: false
weight: 1000
tags:
  - tokens
# geekdocNav: false
geekdocBreadcrumb: false
---

{{< expand "Public applications must authenticate using the OAuth 2.0 specification to use Attentive’s API resources..." >}}
Attentive uses OAuth 2.0’s authorization code grant flow to issue access tokens on behalf of users. When an application is installed on our platform, an authorization code is generated automatically. This authorization code must be exchanged for an access token to authenticate grant and control permissions for your application.
{{< /expand >}}

{{< tabs "access-token" >}}

{{< tab "POST" >}}
Make a call to this endpoint to exchange a temporary authorization code for an access token.
{{< api-explorer id=`post` file=`./params/post.js` >}}
{{< /tab >}}

{{< /tabs >}}
