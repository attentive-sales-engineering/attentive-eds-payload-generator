apiParams = {
  url: 'https://api.attentivemobile.com/v1/subscriptions',
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
  propParams: [],
  queryParams: [
    {
      key: 'signUpSourceId',
      value: '12345',
      placeholder: '12345'
    },
    {
      key: 'externalIdentifiers.clientUserId',
      value: 'abc123',
      placeholder: 'abc123'
    },
    {
      key: 'externalIdentifiers.shopifyId',
      value: 'shopify123',
      placeholder: 'shopify123'
    },
    {
      key: 'externalIdentifiers.klaviyoId',
      value: 'klaviyo123',
      placeholder: 'klaviyo123'
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
    },
    {
      key: 'subscriptionType',
      value: 'MARKETING',
      placeholder: 'MARKETING'
    },
    {
      key: 'singleOptIn',
      value: 'true',
      placeholder: 'true'
    },
    {
      key: 'locale.language',
      value: 'en',
      placeholder: 'en'
    },
    {
      key: 'locale.country',
      value: 'US',
      placeholder: 'US'
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
