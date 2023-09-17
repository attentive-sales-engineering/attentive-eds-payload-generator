apiParams = {
  url: 'https://petstore.swagger.io/v2/pet/findByStatus',
  method: 'GET',
  pathParams: [],
  queryParams: [
    {
      key: 'status',
      value: 'available',
      placeholder: 'available, pending, sold'
    },
    {
      key: 'status',
      value: 'pending',
      placeholder: 'available, pending, sold'
    },
    {
      key: 'status',
      value: 'sold',
      placeholder: 'available, pending, sold'
    }
  ],
  jsonParams: {},
  headerParams: [
    { key: 'Content-Type', value: 'application/x-www-form-urlencoded' }
  ],
  authParams: [{ key: 'api_key', value: 'special-key', placeholder: 'API Key' }]
}
