apiParams = {
  url: 'https://api.attentivemobile.com/v1/x',
  method: 'POST',
  sourceParams: [
    {
      key: 'Client Name',
      value: '',
      placeholder: 'Chafco (required)'
    },
    {
      key: 'Client ID',
      value: '',
      placeholder: '83006 (required)'
    },
    {
      key: 'fileName',
      value: '',
      placeholder: 'chafco/uploads/custom_attributes.csv (required)'
    },
    {
      key: 'delimiter',
      value: '',
      placeholder: 'comma, tab, pipe, ndjson (optional, default comma)'
    },
    {
      key: 'dateFormat',
      value: '',
      placeholder: 'yyyyMMdd, yyyyMMddHH00 (required, if scheduled)'
    },
    {
      key: 'timeZone',
      value: '',
      placeholder: 'America/New_York, Europe/London (required, if scheduled)'
    }
  ],
  propParams: [
    {
      key: 'prop1',
      value: '',
      placeholder: 'prop1 (required)'
    }
  ],
  itemsParams: [
    {
      key: 'productId',
      value: '',
      placeholder: 'productId (required)'
    },
    {
      key: 'productVariantId',
      value: '',
      placeholder: 'productId (required)'
    },
    {
      key: 'productImage',
      value: '',
      placeholder: 'imageUrl (optional)'
    },
    {
      key: 'productUrl',
      value: '',
      placeholder: 'productUrl (optional)'
    },
    {
      key: 'name',
      value: '',
      placeholder: 'productName (optional)'
    },
    {
      key: 'quantity',
      value: '',
      placeholder: 'quantity (optional)'
    }
  ],
  priceParams: [
    {
      key: 'value',
      value: '',
      placeholder: 'price (required)'
    },
    {
      key: 'currency',
      value: '',
      placeholder: 'USD, CAD, GBP (optional)'
    }
  ],
  queryParams: [
    {
      key: 'type',
      value: '',
      placeholder: 'Order Shipped (required)'
    },
    {
      key: 'externalEventId',
      value: '',
      placeholder: 'externalEventId (optional)'
    },
    {
      key: 'occurredAt',
      value: '',
      placeholder:
        '2021-03-30T14:38:29+0000 (optional, default = now, if prop omitted)'
    }
  ],
  jsonParams: {},
  headerParams: [
    {
      key: 'Authorization',
      value: 'Bearer <API Key>',
      placeholder: 'Bearer <API Key> (required)'
    }
  ],
  userParams: [
    {
      key: 'phone',
      value: '',
      placeholder: 'phone (required, E.164 format)'
    },
    {
      key: 'email',
      value: '',
      placeholder: 'email (phone or email required)'
    },
    {
      key: 'externalIdentifiers.clientUserId',
      value: '',
      placeholder: 'clientUserId (optional)'
    }
  ],
  customParams: [
    {
      key: 'name',
      value: '',
      placeholder: 'customIdentifierName (optional)'
    },
    {
      key: 'value',
      value: '',
      placeholder: 'clientUserId (optional)'
    }
  ]
}
