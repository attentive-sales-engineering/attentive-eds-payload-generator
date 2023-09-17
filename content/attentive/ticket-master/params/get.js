apiParams = {
  url:
    'http://localhost:4000/ticketmaster/{{apiKey}}',
  method: 'GET',
  pathParams: [
    {
      key: 'apiKey',
      value: '',
      placeholder: 'cTZUS0VL********'
    }
  ],
  queryParams: [
    {
      key: 'phone',
      value: '+12065551234',
      placeholder: '+12065551234'
    },
    {
      key: 'type',
      value: 'Tickets Purchased',
      placeholder: 'Tickets Purchased'
    },
    {
      key: 'eventId',
      value: 'abc123',
      placeholder: 'abc123'
    },
    {
      key: 'eventName',
      value: 'Jets vs. Seahawks',
      placeholder: 'Jets vs. Seahawks'
    },
    {
      key: 'ticketsPurchased',
      value: '2',
      placeholder: '2'
    }
  ],
  jsonParams: {},
  headerParams: [],
  authParams: []
}
