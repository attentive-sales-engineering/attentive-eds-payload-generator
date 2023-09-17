apiParams = {
  url: 'https://api.attentivemobile.com/v1/identity-resolution/user-identifiers',
  method: 'POST',
  pathParams: [],
  queryParams: [],
  jsonParams: {
    phone: '+12063996576',
    email: 'jchaffee@attentivemobile.com',
    shopifyId: '123456789000',
    klaviyoId: '0123456789ABCDEFGHIJKLMNOP',
    clientUserId: '123456',
    customIdentifiers: [
      {
        name: 'sf_uid',
        value: 'xyz789'
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
