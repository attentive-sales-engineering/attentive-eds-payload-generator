apiParams = {
  url: 'https://petstore.swagger.io/v2/pet',
  method: 'POST',
  pathParams: [],
  queryParams: [],
  jsonParams: {
    id: 0,
    category: {
      id: 0,
      name: 'string'
    },
    name: 'doggie',
    photoUrls: ['string'],
    tags: [
      {
        id: 0,
        name: 'string'
      }
    ],
    status: 'available'
  },
  headerParams: [
    { key: 'Content-Type', value: 'application/json' },
    { key: 'api_key', value: 'special-key' }
  ],
  authParams: []
}
