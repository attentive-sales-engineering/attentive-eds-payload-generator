apiParams = {
  url: 'https://api.attentivemobile.com/v1/webhooks/{{webhookId}}',
  method: 'DELETE',
  pathParams: [{ key: 'webhookId', value: '', placeholder: 'Webhook ID' }],
  queryParams: [],
  jsonParams: {},
  headerParams: [
    { key: 'Content-Type', value: 'application/x-www-form-urlencoded' },
    { key: 'Authorization', value: '' }
  ],
  authParams: [{ key: 'api_key', value: 'special-key', placeholder: 'API Key' }]
}
