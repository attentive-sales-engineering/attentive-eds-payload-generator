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
  userParams: [
    {
      key: 'phone',
      value: '+12063996576',
      placeholder: '+12063996576'
    },
    {
      key: 'email',
      value: 'jchaffee@attentivemobile.com',
      placeholder: 'jchaffee@attentivemobile.com'
    }
  ]
}
