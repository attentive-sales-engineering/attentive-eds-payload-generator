apiParams = {
  url: 'https://api.attentivemobile.com/v1/text/send',
  method: 'POST',
  propParams: [
    {
      key: 'to',
      value: '+12063996576',
      placeholder: '+12063996576 (required)'
    },
    {
      key: 'subscriberExternalId',
      value: 'abc123',
      placeholder: 'abc123  (required if no to)'
    },
    {
      key: 'body',
      value: 'This is my message body',
      placeholder: 'This is my message body (required)'
    },
    {
      key: 'mediaUrl',
      value: 'https://example.com/image.png',
      placeholder: 'https://example.com/image.png (optional)'
    },
    {
      key: 'messageName',
      value: 'myMessageName',
      placeholder: 'myMessageName (optional)'
    },
    {
      key: 'useShortLinks',
      value: 'true',
      placeholder: 'true (optional)'
    },
    {
      key: 'skipFatigue',
      value: 'true',
      placeholder: 'true (required)'
    },
    {
      key: 'subscriptionType',
      value: 'MARKETING',
      placeholder: 'MARKETING or TRANSACTIONAL (required)'
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
