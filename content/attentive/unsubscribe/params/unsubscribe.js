apiParams = {
  url: 'https://api.attentivemobile.com/v1/subscriptions/unsubscribe',
  method: 'POST',
  propParams: [],
  queryParams: [
    {
      key: 'subscriptions[0].type',
      value: 'MARKETING',
      placeholder: 'MARKETING'
    },
    {
      key: 'subscriptions[0].channel',
      value: 'TEXT',
      placeholder: 'TEXT'
    },
    {
      key: 'subscriptions[1].type',
      value: 'MARKETING',
      placeholder: 'MARKETING'
    },
    {
      key: 'subscriptions[1].channel',
      value: 'EMAIL',
      placeholder: 'EMAIL'
    },
    {
      key: 'subscriptions[2].type',
      value: 'TRANSACTIONAL',
      placeholder: 'TRANSACTIONAL'
    },
    {
      key: 'subscriptions[2].channel',
      value: 'TEXT',
      placeholder: 'TEXT'
    },
    {
      key: 'subscriptions[3].type',
      value: 'TRANSACTIONAL',
      placeholder: 'TRANSACTIONAL'
    },
    {
      key: 'subscriptions[3].channel',
      value: 'EMAIL',
      placeholder: 'EMAIL'
    }
  ],
  jsonParams: {},
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
