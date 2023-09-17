apiParams = {
  url: 'https://petstore.swagger.io/v2/pet/{{petId}}',
  method: 'POST',
  pathParams: [{ key: 'petId', value: '1', placeholder: 'Pet ID' }],
  queryParams: [
    {
      key: 'name',
      value: '',
      placeholder: 'Pet name'
    },
    {
      key: 'status',
      value: '',
      placeholder: 'available, pending, sold'
    }
  ],
  jsonParams: {},
  headerParams: [
    { key: 'Content-Type', value: 'application/x-www-form-urlencoded' }
  ],
  authParams: [{ key: 'api_key', value: 'special-key', placeholder: 'API Key' }]
}
