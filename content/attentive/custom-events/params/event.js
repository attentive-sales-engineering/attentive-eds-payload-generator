apiParams = {
  url: 'https://api.attentivemobile.com/v1/events/custom',
  method: 'POST',
  pathParams: [],
  queryParams: [],
  jsonParams: {
    type: 'Clicked Button',
    properties: {
      pageUrl: 'johnchaffee.github.io/index.html',
      buttonId: '12345'
    },
    user: {
      phone: '+12063996576'
    }
  },
  headerParams: [
    { key: 'Content-Type', value: 'application/json' },
    { key: 'Authorization', value: '' }
  ],
  authParams: []
}
