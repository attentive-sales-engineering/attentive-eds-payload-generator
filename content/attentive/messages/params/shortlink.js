apiParams = {
  url: 'https://api.attentivemobile.com/v1/text/send',
  method: 'POST',
  pathParams: [],
  queryParams: [],
  jsonParams: {
    to: '+12063996576',
    body: 'This is a shortened URL:\n\nhttps://example.com',
    messageName: 'shortlink',
    useShortLinks: true,
    subscriptionType: 'MARKETING'
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
