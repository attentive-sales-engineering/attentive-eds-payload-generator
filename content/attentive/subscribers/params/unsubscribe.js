apiParams = {
  url: 'https://api.attentivemobile.com/v1/subscriptions/unsubscribe',
  method: 'POST',
  pathParams: [],
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
