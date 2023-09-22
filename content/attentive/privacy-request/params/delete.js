apiParams = {
  url: 'https://api.attentivemobile.com/v1/privacy/delete-request',
  method: 'POST',
  sourceParams: [
    {
      key: 'Client Name',
      value: '',
      placeholder: ''
    },
    {
      key: 'Client ID',
      value: '',
      placeholder: ''
    },
    {
      key: 'fileName',
      value: '',
      placeholder: 'chafco/uploads/custom_attributes.csv'
    },
    {
      key: 'delimiter',
      value: '',
      placeholder: '(optional) comma (default), tab, pipe, or ndjson'
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
      value: '{{subjectPhone}}',
      placeholder: '{{subjectPhone}}'
    },
    {
      key: 'subjectEmail',
      value: '{{subjectEmail}}',
      placeholder: '{{subjectEmail}}'
    },
    {
      key: 'requestMsg',
      value: '',
      placeholder: 'The subscriber requested to be removed (optional)'
    }
  ],
  jsonParams: {},
  headerParams: [
    { key: 'Authorization', value: '', placeholder: 'Bearer <API Key>' }
  ],
  userParams: []
}
