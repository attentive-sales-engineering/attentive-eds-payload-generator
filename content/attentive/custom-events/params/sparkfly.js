apiParams = {
  url: 'https://api.attentivemobile.com/v1/events/custom',
  method: 'POST',
  pathParams: [],
  queryParams: [],
  jsonParams: {
    type: 'Sparkfly Campaign',
    properties: {
      sf_base_url: 'https://mp.sparkfly.com/',
      sf_xid: 'abcd1234',
      sf_uid: 'xyz789',
      sf_hmac: '8ae200df99cd0576b98779833292829190dad6e0d63e9217b7a529f8ad6aa57b',
      sf_ctid: '+12063996576',
      ts: '1704038400',
      url: 'https://mp.sparkfly.com/abcd1234?sf_uid=xyz789&sf_hmac=8ae200df99cd0576b98779833292829190dad6e0d63e9217b7a529f8ad6aa57b&sf_ctid=%2012063996576&ts=1704038400'
    },
    user: {
      phone: '+12063996576'
    }
  },
  headerParams: [
    { key: 'Content-Type', value: 'application/json' },
    { key: 'Authorization', value: '' }
  ],
  authParams: []
}
