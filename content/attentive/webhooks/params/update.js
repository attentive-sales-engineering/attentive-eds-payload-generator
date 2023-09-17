apiParams = {
  url: 'https://api.attentivemobile.com/v1/webhooks/{{webhookId}}',
  method: 'PUT',
  pathParams: [{ key: 'webhookId', value: '1', placeholder: 'Webhook ID' }],
  queryParams: [],
  jsonParams: {
    url: 'https://example.com/webhooks',
    events: ['sms.sent', 'phone.subscribed'],
    disabled: true
  },
  headerParams: [
    { key: 'Content-Type', value: 'application/json' },
    { key: 'Authorization', value: '' }
  ],
  authParams: []
}
