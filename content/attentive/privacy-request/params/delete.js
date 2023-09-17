apiParams = {
  url: 'https://api.attentivemobile.com/v1/privacy/delete-request',
  method: 'POST',
  pathParams: [],
  queryParams: [],
  jsonParams: {
    subjectEmail: 'jchaffee@attentivemobile.com',
    subjectPhone: '+12063996576',
    requestMsg: 'The subscriber requested to be removed'
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
