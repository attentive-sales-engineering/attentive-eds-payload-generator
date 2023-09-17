apiParams = {
  url: 'https://chafco.myshopify.com/admin/api/2022-10/webhooks/{{webhookId}}.json',
  method: 'GET',
  pathParams: [
    {
      key: 'webhookId',
      value: '',
      placeholder: 'Webhook ID'
    }
  ],
  queryParams: [],
  jsonParams: {},
  headerParams: [{ key: 'X-Shopify-Access-Token', value: '' }],
  authParams: []
}
