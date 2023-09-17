apiParams = {
  url: 'https://chafco.myshopify.com/admin/api/2022-10/webhooks/{{webhookId}}.json',
  method: 'PUT',
  pathParams: [
    {
      key: 'webhookId',
      value: '12345',
      placeholder: 'Webhook ID'
    }
  ],
  queryParams: [],
  jsonParams: {
    webhook: { id: 12345, address: 'https://johnchaffee.ngrok.io/foo/bar' }
  },
  headerParams: [
    { key: 'Content-Type', value: 'application/json' },
    { key: 'X-Shopify-Access-Token', value: '' }
  ]
}
