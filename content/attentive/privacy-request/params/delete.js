apiParams = {
  url: 'https://api.attentivemobile.com/v1/privacy/delete-request',
  method: 'POST',
  sourceParams: [
    {
      key: 'Client Name',
      value: 'Chafco',
      placeholder: 'Chafco'
    },
    {
      key: 'Client ID',
      value: '83006',
      placeholder: '83006'
    },
    {
      key: 'fileName',
      value: 'chafco/uploads/custom_attributes.csv',
      placeholder: 'chafco/uploads/custom_attributes.csv'
    },
    {
      key: 'delimiter',
      value: 'comma',
      placeholder: 'comma, tab or pipe'
    },
    {
      key: 'dateFormat',
      value: 'yyyyMMdd',
      placeholder: 'yyyyMMdd'
    },
    {
      key: 'timeZone',
      value: 'America/New_York',
      placeholder: 'America/New_York'
    }
  ],
  propParams: [],
  queryParams: [
    {
      key: 'subjectPhone',
      value: '+12063996576',
      placeholder: '+12063996576'
    },
    {
      key: 'subjectEmail',
      value: 'jchaffee@attentivemobile.com',
      placeholder: 'jchaffee@attentivemobile.com'
    },
    {
      key: 'requestMsg',
      value: 'The subscriber requested to be removed',
      placeholder: 'The subscriber requested to be removed'
    }
  ],
  jsonParams: {},
  headerParams: [
    { key: 'Authorization', value: '', placeholder: 'Bearer <API Key>' }
  ],
  userParams: []
}
