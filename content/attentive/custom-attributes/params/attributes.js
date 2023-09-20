apiParams = {
  url: 'https://api.attentivemobile.com/v1/attributes/custom',
  method: 'POST',
  sourceParams: [
    {
      key: 'Client Name',
      value: 'Chafco',
      placeholder: 'Chafco'
    },
    {
      key: 'Client ID',
      value: '83006',
      placeholder: '83006'
    },
    {
      key: 'fileName',
      value: 'chafco/uploads/custom_attributes.csv',
      placeholder: 'chafco/uploads/custom_attributes.csv'
    },
    {
      key: 'delimiter',
      value: 'comma',
      placeholder: 'comma, tab, pipe, or ndjson'
    },
    {
      key: 'dateFormat',
      value: 'yyyyMMdd',
      placeholder: 'yyyyMMdd'
    },
    {
      key: 'timeZone',
      value: 'America/New_York',
      placeholder: 'America/New_York'
    }
  ],
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
    }
  ]
}
