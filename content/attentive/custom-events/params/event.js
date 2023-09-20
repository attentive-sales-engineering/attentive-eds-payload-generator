apiParams = {
  url: 'https://api.attentivemobile.com/v1/events/custom',
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
      key: 'orderStatusURL',
      value: 'example.com/orderstatus/54321',
      placeholder: 'example.com/orderstatus/54321'
    },
    {
      key: 'delivery_date',
      value: 'May 10',
      placeholder: 'May 10'
    },
    {
      key: 'Order Id',
      value: '54321',
      placeholder: '54321'
    },
    {
      key: 'productId',
      value: 'productId1',
      placeholder: 'productId1'
    },
    {
      key: 'shipment.trackingNumber',
      value: '12345',
      placeholder: '12345'
    }
  ],
  queryParams: [
    {
      key: 'type',
      value: 'Order Shirpped',
      placeholder: 'Order Shipped'
    },
    {
      key: 'externalEventId',
      value: '37fb97a9-6cfd-4983-bd65-68d104d53b70',
      placeholder: '37fb97a9-6cfd-4983-bd65-68d104d53b70'
    },
    {
      key: 'occurredAt',
      value: '2021-03-30T14:38:29+0000',
      placeholder: '2021-03-30T14:38:29+0000'
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
    },
    {
      key: 'externalIdentifiers.clientUserId',
      value: 'abc123',
      placeholder: 'abc123'
    }
  ],
  customParams: [
    {
      key: 'name',
      value: 'myCustomId',
      placeholder: 'myCustomId'
    },
    {
      key: 'value',
      value: 'abc123',
      placeholder: 'abc123'
    }
  ]
}
