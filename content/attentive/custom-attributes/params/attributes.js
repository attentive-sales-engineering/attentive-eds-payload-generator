apiParams = {
  url: 'https://api.attentivemobile.com/v1/attributes/custom',
  method: 'POST',
  propParams: [
    {
      key: 'favorite color',
      value: 'Blue and Green',
      placeholder: 'Blue and Green'
    },
    {
      key: 'Favorite team',
      value: 'Seattle Seahawks',
      placeholder: 'Seattle Seahawks'
    }
  ],
  queryParams: [],
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
    },
    {
      key: 'externalIdentifiers.clientUserId',
      value: 'abc123',
      placeholder: 'abc123'
    },
    {
      key: 'externalIdentifiers.customIdentifiers[0].name',
      value: 'myCustomId',
      placeholder: 'myCustomId'
    },
    {
      key: 'externalIdentifiers.customIdentifiers[0].value',
      value: 'myCustom123',
      placeholder: 'myCustom123'
    }
  ]
}
