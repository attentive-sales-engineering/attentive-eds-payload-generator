apiParams = {
  url: 'https://api.attentivemobile.com/v1/subscriptions',
  method: 'GET',
  pathParams: [],
  queryParams: [
    {
      key: 'phone',
      value: '',
      placeholder:
        "A user's phone number we use to fetch subscription eligibility."
    },
    {
      key: 'email',
      value: '',
      placeholder: "A user's email we use to fetch subscription eligibility."
    }
  ],
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
