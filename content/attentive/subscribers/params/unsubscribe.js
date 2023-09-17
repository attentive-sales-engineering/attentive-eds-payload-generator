apiParams = {
  url: 'https://api.attentivemobile.com/v1/subscriptions/unsubscribe',
  method: 'POST',
  propParams: [
    {
      key: 'pageUrl',
      value: 'https://google.com',
      placeholder: 'https://google.com'
    },
    {
      key: 'buttonId',
      value: 'abc123',
      placeholder: 'abc123'
    }
  ],
  queryParams: [],
  jsonParams: {
    user: {
      phone: '+12063996576',
      email: 'jchaffee@attentivemobile.com'
    },
    subscriptions: [
      {
        type: 'MARKETING',
        channel: 'EMAIL'
      },
      {
        type: 'MARKETING',
        channel: 'TEXT'
      },
      {
        type: 'TRANSACTIONAL',
        channel: 'EMAIL'
      },
      {
        type: 'TRANSACTIONAL',
        channel: 'TEXT'
      }
    ]
  },
  headerParams: [
    { key: 'Authorization', value: '', placeholder: 'Bearer <API Key>' }
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
