---
title: "Product Catalog"
draft: false
weight: 1000
tags:
  - product
  - catalog
# geekdocNav: false
geekdocBreadcrumb: false
---

Our product catalog API unlocks the ability to send high-performing journeys such as back in stock, low inventory, and price drop. It also lets you segment your customers and branch journeys using product data. See [Product Catalog](https://docs.attentivemobile.com/openapi/reference/tag/Product-Catalog/) for more info on the product catalog file format and how to generate and upload a product catalog

{{< tabs "catalog" >}}

{{< tab "POST" >}}
{{< expand "Upload product catalog..." >}}
Make a call to this endpoint to start sending Attentive your full or partial product catalog.

The process starts with a POST to this endpoint, where you will receive a pre-signed AWS S3 URL. You can use any language's http request libraries for uploading a file via HTTP. Here's how to do it with `curl` as an example:

```sh
curl --upload-file ${fileNameLocally} ${presignedURL}
```

and here's an example in Python:

```python
import requests
with open(filepath, 'rb') as f:
    r = requests.put(upload_url, data=f)
```

[Here are examples from AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html) on how to send the file over in popular programming languages. Note that you aren't interested in the portion of these examples where they are generating the pre-signed URL, but simply the http call to upload the file to the URL.

Once your full or partial product catalog begins to upload, the status is updated to `validating` while it's processing and the file is checked for errors. After the upload is validated, the status is updated to `validated` or skips directly to `completed`. When the catalog is saved, the status is updated to `SAVED`. In cases where there are errors saving the data, Attentive Engineering is notified and will contact you.

To ensure there are no validation errors in the file, you can set `validateOnly` parameter to `true` to avoid saving any data. We highly recommend this during your development to get a faster feedback loop on any validation errors as you generate files.

If there are no errors returned in the upload response, your product catalog uploaded successfully.
{{< /expand >}}
{{< api-explorer id=`post` file=`./params/post.js` >}}
{{< /tab >}}

{{< tab "LIST" >}}
View Recent Catalog Uploads
{{< api-explorer id=`list` file=`./params/list.js` >}}
{{< /tab >}}

{{< tab "GET" >}}
Lookup Product Catalog Ingestion
{{< api-explorer id=`get` file=`./params/get.js` >}}
{{< /tab >}}

{{< /tabs >}}
