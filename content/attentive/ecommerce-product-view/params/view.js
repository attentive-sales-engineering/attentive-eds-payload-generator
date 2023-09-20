apiParams = {
  url: 'https://api.attentivemobile.com/v1/events/ecommerce/product-view',
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
  itemsParams: [
    {
      key: 'productId',
      value: 'AB12345',
      placeholder: 'AB12345'
    },
    {
      key: 'productVariantId',
      value: 'AB12345',
      placeholder: 'AB12345'
    },
    {
      key: 'productImage',
      value: 'http://my.cdn.com/products/new-product.png',
      placeholder: 'http://my.cdn.com/products/new-product.png'
    },
    {
      key: 'productUrl',
      value: 'http://my-store.com/products/shirts/my-shirt',
      placeholder: 'http://my-store.com/products/shirts/my-shirt'
    },
    {
      key: 'name',
      value: 'T-Shirt',
      placeholder: 'T-Shirt'
    },
    {
      key: 'price[0].value',
      value: '19.99',
      placeholder: '19.99'
    },
    {
      key: 'price[0].currency',
      value: 'USD',
      placeholder: 'USD'
    },
    {
      key: 'quantity',
      value: '1',
      placeholder: '1'
    }
  ],
  queryParams: [
    {
      key: 'occurredAt',
      value: '2021-03-30T14:38:29+0000',
      placeholder: 'Leave blank to auto-enter current date'
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
  ]
}
