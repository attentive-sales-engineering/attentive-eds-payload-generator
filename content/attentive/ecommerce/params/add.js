apiParams = {
  url: 'https://api.attentivemobile.com/v1/events/ecommerce/add-to-cart',
  method: 'POST',
  pathParams: [],
  queryParams: [],
  jsonParams: {
    items: [
      {
        productId: 'AB12345',
        productVariantId: 'CD12345',
        productImage: 'http://my.cdn.com/products/new-product.png',
        productUrl: 'http://my-store.com/products/shirts/my-shirt',
        name: 'T-Shirt',
        price: [
          {
            value: 19.99,
            currency: 'USD'
          }
        ],
        quantity: 1
      }
    ],
    user: {
      phone: '+12063996576',
      email: 'jchaffee@attentivemobile.com'
    }
  },
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
