apiParams = {
  url: 'https://api.attentivemobile.com/v1/text/send-bulk',
  method: 'POST',
  pathParams: [],
  queryParams: [],
  jsonParams: [
    {
      to: '+12063996576',
      body: 'Holiday sale!',
      subscriptionType: 'MARKETING'
    },
    {
      to: '+12065551234',
      body: 'Holiday sale!',
      subscriptionType: 'MARKETING'
    },
    {
      to: '+12065554321',
      body: 'Holiday sale!',
      subscriptionType: 'MARKETING'
    }
  ],
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
