apiParams = {
  url: 'https://api.attentivemobile.com/v1/subscriptions',
  method: 'POST',
  pathParams: [],
  queryParams: [],
  jsonParams: {
    user: {
      phone: '+13115552368',
      email: 'test@gmail.com'
    },
    signUpSourceId: 'string',
    externalIdentifiers: {
      clientUserId: 'string',
      shopifyId: 'string',
      klaviyoId: 'string',
      customIdentifiers: [
        {
          name: 'string',
          value: 'string'
        }
      ]
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
