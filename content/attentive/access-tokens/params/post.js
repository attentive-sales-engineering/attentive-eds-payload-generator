apiParams = {
  url: 'https://api.attentivemobile.com/v1/authorization-codes/tokens',
  method: 'POST',
  pathParams: [],
  queryParams: [
    {
      key: 'grant_type',
      value: 'authorization_code',
      placeholder:
        'Type of grant. Currently, authorization_code is the only accepted type.'
    },
    {
      key: 'code',
      value: 'MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3',
      placeholder:
        'Authorization code provided after the user authorizes the scopes during the application install process.'
    },
    {
      key: 'redirect_uri',
      value: '9f7a2f11a4f849f59268869ec766111c',
      placeholder:
        "The application's client ID which can be found on the Manage Distribution tab for the application."
    },
    {
      key: 'client_id',
      value: '9f7a2f11a4f849f59268869ec766111c',
      placeholder:
        "The application's client ID which can be found on the Manage Distribution tab for the application."
    },
    {
      key: 'client_secret',
      value: '0FvaRpPi5KBC4Izj9ALA0AG8J2WdcBhU',
      placeholder:
        "The application's client secret which can be found on the Manage Distribution tab for the application."
    }
  ],
  jsonParams: {},
  headerParams: [
    { key: 'Content-Type', value: 'application/x-www-form-urlencoded' },
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
