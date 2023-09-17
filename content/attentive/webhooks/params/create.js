apiParams = {
  url: 'https://api.attentivemobile.com/v1/webhooks',
  method: 'POST',
  pathParams: [],
  queryParams: [],
  jsonParams: {
    url: 'https://example.com/webhooks',
    events: ['sms.sent', 'phone.subscribed']
  },
  headerParams: [
    { key: 'Content-Type', value: 'application/json' },
    { key: 'Authorization', value: '' }
  ],
  authParams: []
}
