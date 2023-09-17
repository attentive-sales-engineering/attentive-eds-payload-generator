apiParams = {
  url: 'https://api.attentivemobile.com/v1/identity-resolution/user-identifiers',
  method: 'POST',
  propParams: [],
  queryParams: [
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
      key: 'shopifyId',
      value: 'shopify123',
      placeholder: 'shopify123'
    },
    {
      key: 'klaviyoId',
      value: 'klaviyo123',
      placeholder: 'klaviyo123'
    },
    {
      key: 'clientUserId',
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
  ],
  jsonParams: {},
  headerParams: [
    { key: 'Authorization', value: '', placeholder: 'Bearer <API Key>' }
  ],
  userParams: []
}
