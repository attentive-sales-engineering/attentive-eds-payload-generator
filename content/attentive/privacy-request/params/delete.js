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
      placeholder: 'chafco/uploads/custom_attributes.csv (required)'
    },
    {
      key: 'delimiter',
      value: '',
      placeholder: '(optional) comma (default), tab, pipe, or ndjson'
    },
    {
      key: 'dateFormat',
      value: '',
      placeholder: 'yyyyMMdd, yyyyMMddHH00 (required, if scheduled)'
    },
    {
      key: 'timeZone',
      value: '',
      placeholder: 'America/New_York, Europe/London (required, if scheduled)'
    }
  ],
  propParams: [],
  queryParams: [
    {
      key: 'subjectPhone',
      value: '',
      placeholder: 'subjectPhone (subjectPhone or subjectEmail required)'
    },
    {
      key: 'subjectEmail',
      value: '',
      placeholder: 'subjectEmail (subjectPhone or subjectEmail required)'
    },
    {
      key: 'requestMsg',
      value: '',
      placeholder: 'requestMsg (optional)'
    }
  ],
  jsonParams: {},
  headerParams: [
    {
      key: 'Authorization',
      value: 'Bearer <API Key>',
      placeholder: 'Bearer <API Key> (required)'
    }
  ],
  userParams: []
}
