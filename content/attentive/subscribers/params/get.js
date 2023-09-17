apiParams = {
  url: 'https://api.attentivemobile.com/v1/subscriptions',
  method: 'GET',
  pathParams: [],
  queryParams: [
    {
      key: "phone",
      value: "",
      placeholder: "A user's phone number we use to fetch subscription eligibility.",
    },
    { key: "email", value: "", placeholder: "A user's email we use to fetch subscription eligibility." },
  ],
  jsonParams: {},
  headerParams: [{ key: 'Authorization', value: '' }],
  authParams: []
}
