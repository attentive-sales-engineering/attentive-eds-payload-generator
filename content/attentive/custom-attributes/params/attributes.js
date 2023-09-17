apiParams = {
  url: 'https://api.attentivemobile.com/v1/attributes/custom',
  method: 'POST',
  propParams: [
    {
      key: 'pageUrl',
      value: 'https://google.com',
      placeholder: 'https://google.com'
    },
    {
      key: 'buttonId',
      value: 'abc123',
      placeholder: 'abc123'
    }
  ],
  queryParams: [
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
  jsonParams: {
    // properties: {
    //   'favorite color': 'Blue and Green',
    //   'Favorite team': 'Seattle Seahawks'
    // }
  },
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
