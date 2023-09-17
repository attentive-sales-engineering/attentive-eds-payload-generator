apiParams = {
  url: 'https://chafco.myshopify.com/admin/api/2022-10/webhooks.json',
  method: 'POST',
  pathParams: [],
  queryParams: [],
  jsonParams: {
    webhook: {
      address: 'https://johnchaffee.ngrok.io/shopify/carts/update',
      topic: 'carts/update',
      format: 'json'
    }
  },
  headerParams: [
    { key: 'Content-Type', value: 'application/json' },
    { key: 'X-Shopify-Access-Token', value: '' }
  ]
}
