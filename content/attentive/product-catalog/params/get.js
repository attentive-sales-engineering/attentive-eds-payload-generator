apiParams = {
  url:
    'https://api.attentivemobile.com/v1/product-catalog/uploads/{{uploadId}}',
  method: 'GET',
  pathParams: [
    {
      key: 'uploadId',
      value: '',
      placeholder: 'The upload ID returned from a previous call'
    }
  ],
  queryParams: [],
  jsonParams: {},
  headerParams: [{ key: 'Authorization', value: '' }],
  authParams: []
}
