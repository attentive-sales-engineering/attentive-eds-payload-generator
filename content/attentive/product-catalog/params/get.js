apiParams = {
  url: 'https://api.attentivemobile.com/v1/product-catalog/uploads/{{uploadId}}',
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
