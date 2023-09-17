apiParams = {
  url: 'https://petstore.swagger.io/v2/pet/{{petId}}',
  method: 'DELETE',
  pathParams: [{ key: 'petId', value: '1', placeholder: 'Pet ID' }],
  queryParams: [],
  jsonParams: {},
  headerParams: [
    { key: 'Content-Type', value: 'application/x-www-form-urlencoded' }
  ],
  authParams: [{ key: 'api_key', value: 'special-key', placeholder: 'API Key' }]
}
