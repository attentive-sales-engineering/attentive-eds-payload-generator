function getApiFromUrl (url) {
  switch (url) {
    case 'https://api.attentivemobile.com/v1/attributes/custom':
      api = 'Custom Attributes'
      break
    case 'https://api.attentivemobile.com/v1/events/custom':
      api = 'Custom Events'
      break
    case 'https://api.attentivemobile.com/v1/events/ecommerce/add-to-cart':
      api = 'eCommerce Add to Cart'
      break
    case 'https://api.attentivemobile.com/v1/events/ecommerce/product-view':
      api = 'eCommerce Product View'
      break
    case 'https://api.attentivemobile.com/v1/events/ecommerce/purchase':
      api = 'eCommerce Purchase'
      break
    case 'https://api.attentivemobile.com/v1/identity-resolution/user-identifiers':
      api = 'Identity'
      break
    case 'https://api.attentivemobile.com/v1/text/send':
      api = 'Messages'
      break
    case 'https://api.attentivemobile.com/v1/privacy/delete-request':
      api = 'Privacy Request'
      break
    case 'https://api.attentivemobile.com/v1/subscriptions':
      api = 'Subscribe'
      break
    case 'https://api.attentivemobile.com/v1/subscriptions/unsubscribe':
      api = 'Unsubscribe'
      break
    default:
      api = 'Custom Payload'
  }
  return api
}

function updateTargetPayloadBody (id, targetPayload) {
  // console.log('TARGET PAYLOAD:', targetPayload)
  const jsonReq = JSON.stringify(targetPayload, null, 2)
  // console.log('JSON BODY:', jsonBody)
  // console.log(
  //   `updateTargetPayloadBody: .querySelector(#${id} [data-target-payload])`
  // )

  // Render Target Payload
  aceJsonRequest = ace.edit(
    document.querySelector(`#${id} [data-target-payload]`)
  )
  aceJsonRequest.setTheme('ace/theme/monokai')
  aceJsonRequest.session.setMode('ace/mode/json')
  aceJsonRequest.setValue(null)
  aceJsonRequest.insert(jsonReq)
  aceJsonRequest.setReadOnly(true)
  aceJsonRequest.setOptions({
    maxLines: 30,
    highlightActiveLine: false,
    showLineNumbers: false,
    showGutter: false,
    showPrintMargin: false,
    fontSize: 14
  })
}

function updateSourcePayloadBody (id, sourcePayload) {
  // console.log('SOURCE PAYLOAD:', sourcePayload)
  const jsonReq = JSON.stringify(sourcePayload, null, 2)
  // console.log('JSON BODY:', jsonBody)
  // console.log(
  //   `updateSourcePayloadBody: .querySelector(#${id} [data-source-payload])`
  // )

  // Render Source Payload
  aceJsonRequest = ace.edit(
    document.querySelector(`#${id} [data-source-payload]`)
  )
  aceJsonRequest.setTheme('ace/theme/monokai')
  aceJsonRequest.session.setMode('ace/mode/json')
  aceJsonRequest.setValue(null)
  aceJsonRequest.insert(jsonReq)
  aceJsonRequest.setReadOnly(true)
  aceJsonRequest.setOptions({
    maxLines: 30,
    highlightActiveLine: false,
    showLineNumbers: false,
    showGutter: false,
    showPrintMargin: false,
    fontSize: 14
  })
}

function createKeyValuePair (id, key, value, placeholder) {
  // console.log('createKeyValuePair:', id, key, value, placeholder)
  const element = document
    .querySelector(`#${id} [data-key-value-template]`)
    .content.cloneNode(true)
  let thisKey = element.querySelector('[data-key]')
  thisKey.value = key || null
  let thisValue = element.querySelector('[data-value]')
  thisValue.value = value || null
  thisValue.placeholder = placeholder || 'Value'

  // // Show EnvVar values
  // if (thisValue.value === '') {
  //   thisValue.value = localStorage.getItem(key)
  // }

  // // Mask passwords and sensitive values
  // if (
  //   thisKey.value === 'password' ||
  //   thisKey.value === 'AuthToken' ||
  //   thisKey.value === 'StatusCallback' ||
  //   thisKey.value === 'StatusCallbackUrl' ||
  //   thisKey.value === 'Authorization' ||
  //   thisKey.value === 'apiKey' ||
  //   thisKey.value === 'BasicAuth' ||
  //   thisKey.value === 'X-Shopify-Access-Token'
  // ) {
  //   thisValue.type = 'password'
  // }

  // // Update button
  // element.querySelector('[data-update-btn]').addEventListener('click', e => {
  //   closest = e.target.closest('[data-key-value-pair]')
  //   console.log('UPDATE CLOSEST', closest)
  //   if (typeof newEnvVarDialog.showModal === 'function') {
  //     console.log('NEW ENV VAR DIALOG', newEnvVarDialog)
  //     updatedKey = closest.querySelector('[data-key]').value
  //     console.log('UPDATEDKEY', updatedKey)
  //     newEnvVarDialog.querySelector('[data-key]').value = updatedKey
  //     newEnvVarDialog.querySelector('[data-value]').value =
  //       localStorage.getItem(updatedKey)
  //     newEnvVarDialog.querySelector('[data-value]').placeholder =
  //       closest.querySelector('[data-value]').placeholder
  //     newEnvVarDialog.showModal()

  //     // Enter key listener -> Listen for the "Enter" key in newEnvVar modal
  //     newEnvVarDialog.addEventListener('keydown', e => {
  //       if (e.code === 'Enter') {
  //         setLocalStorage()
  //         thisValue.value = localStorage.getItem(thisKey.value)
  //       }
  //     })

  //     // Save listener -> On newEnvVar dialog "close" because of [method="dialog"]
  //     // Triggered via Cancel & Save buttons or Enter keypress
  //     newEnvVarDialog.addEventListener('close', function onClose () {
  //       if (newEnvVarDialog.returnValue !== 'cancel') {
  //         setLocalStorage()
  //         thisValue.value = localStorage.getItem(thisKey.value)
  //       }
  //     })

  //     // Store item in localStorage and refresh window
  //     function setLocalStorage () {
  //       if (
  //         newEnvVarDialog.querySelector('[data-key]').value !== '' &&
  //         newEnvVarDialog.querySelector('[data-value]').value !== ''
  //       ) {
  //         updatedValue = newEnvVarDialog.querySelector('[data-value]').value
  //         // store the updatedValue for the updatedKey
  //         localStorage.setItem(updatedKey, updatedValue)
  //         // Update the value of all matching keys that are already loaded in browser
  //         document.querySelectorAll('[data-key]').forEach(item => {
  //           if (item.value === updatedKey) {
  //             item.parentElement.querySelector('[data-value]').value =
  //               updatedValue
  //           }
  //         })
  //         // window.location = window.location.href
  //       }
  //     }
  //   }
  // })

  // Remove button
  element.querySelector('[data-remove-btn]').addEventListener('click', e => {
    closest = e.target.closest('[data-key-value-pair]')
    closest.remove()
    // if (id === 'settings') {
    //   let localStorageKey = closest.querySelector('[data-key]').value
    //   localStorage.removeItem(localStorageKey)
    //   window.location = window.location.href
    // }
  })
  return element
}

// function keyValuePairsToObjects (id, container) {
//   const pairs = container.querySelectorAll(`#${id} [data-key-value-pair]`)
//   console.log('PAIRS:', pairs)
//   return [...pairs].reduce((data, pair) => {
//     const key = pair.querySelector('[data-key]').value
//     console.log('KEY:', key)
//     let value = pair.querySelector('[data-value]').value
//     console.log('VALUE:', value)
//     if (value.match(/{{\w+}}/)) {
//       console.log(`value is {{envVar}} -> fetch variable from localStorage`)
//       let valueEnvVar = value.replaceAll(/[{}]/g, '')
//       console.log('VALUE ENV VAR:', valueEnvVar)
//       value = localStorage.getItem(valueEnvVar)
//       console.log('VALUE:', value)
//       console.log(`localStorage.getItem(${valueEnvVar})`)
//     }
//     console.log('DATA:', data)
//     // if (key === '' || value === null || value === '') return data
//     return { ...data, [key]: value }
//   }, {})
// }

function keyValuePairsToObjects (id, container, curlyBraces) {
  const pairs = container.querySelectorAll(`#${id} [data-key-value-pair]`)
  // console.log('PAIRS:', pairs)
  const tempObject = {}
  return [...pairs].reduce((data, pair) => {
    let container = tempObject
    const key = pair.querySelector('[data-key]').value
    // console.log('KEY:', key)
    let value
    // let value = pair.querySelector('[data-value]').value
    if (curlyBraces === true) {
      value = `{{${pair.querySelector('[data-value]').value}}}`
    } else {
      value = pair.querySelector('[data-value]').value
    }
    // console.log('VALUE:', value)
    // console.log('DATA:', data)
    key.split('.').map((k, i, arr) => {
      // console.log('k, i, arr:', k, i, arr)
      // console.log('tempObject before:', tempObject)
      // console.log('container before:', container)
      if (i == arr.length - 1) {
        container = container[k] = value
      } else {
        container = container[k] = {}
        return
      }
      // console.log('container afer:', container)
      // console.log('tempObject after:', tempObject)
    })
    // console.log('tempObject outside:', tempObject)
    // if (key === '' || value === null || value === '') return data
    // return { ...data, [key]: value }
    return { ...data, tempObject }
  }, {})
}

// Parse the json import file and build apiParams
function parseImportFile (edsFile) {
  console.log('IMPORT or RECENT:', edsFile)

  let importFile
  if (edsFile == 'import') {
    importFile = JSON.parse(localStorage.getItem('eds-import'))
  } else if (edsFile == 'recent') {
    importFile = JSON.parse(localStorage.getItem('eds-recent'))
  }
  console.log('IMPORT OBJECT:', importFile)
  if (importFile === null)
    window.location.href = '../../attentive/custom-attributes'

  console.log('IMPORT FILE:', importFile)

  let target = {}
  target = importFile.targetPayload
  console.log('TARGET:', target)
  let source = {}
  source = importFile.sourcePayload
  console.log('SOURCE:', source)
  let client = {}
  client = importFile.clientPayload
  console.log('CLIENT:', client)
  let schedule = {}
  schedule = importFile.schedulePayload
  console.log('SCHEDULE:', schedule)

  // Build the apiParams from the EDS Payload
  function createParams (paramName, paramObject, myParams) {
    // console.log('paramName:', paramName)
    // console.log('paramObject:', paramObject)
    // console.log('myParams:', myParams)
    Object.entries(myParams).forEach(entry => {
      const [key, value] = entry
      // console.log(`PROP ${key}: ${value}`)
      // The queryParams object contains top level properties as well as
      // child objects and arrays. Skip the child objects and arrays
      // as those will be processed separately
      if (paramName === 'queryParams') {
        if (
          `${key}` === 'properties' ||
          `${key}` === 'items' ||
          `${key}` === 'subscriptions' ||
          `${key}` === 'user'
        ) {
          return
        }
      }

      // Don't remove curly braces from subscriptionsParams or headerParams
      // Or keys with these names since they are fixed values for Subscriptions
      let val = value
      if (
        paramName === 'subscriptionsParams' ||
        paramName === 'headerParams' ||
        key.match(/signUpSourceId|subscriptionType|singleOptIn/)
      ) {
        // Do nothing
      } else {
        // Remove curly braces
        if (val && val.length > 0) {
          val = val.slice(2, -2)
        }
      }

      const thisObj = {
        key: key,
        value: val,
        placeholder: ''
      }
      // console.log('PARAM OBJECT:', paramObject)
      // console.log('THIS OBJECT:', thisObj)

      paramObject.push(thisObj)
    })
  }

  apiParams.url = target.url
  apiParams.method = target.method

  // propParams
  if (target.payload_mapping.properties) {
    createParams(
      'propParams',
      apiParams.propParams,
      target.payload_mapping.properties
    )
  }

  // priceParams
  if (
    target.payload_mapping.items &&
    target.payload_mapping.items[0].price[0]
  ) {
    createParams(
      'priceParams',
      apiParams.priceParams,
      target.payload_mapping.items[0].price[0]
    )
  }

  // itemsParams
  if (target.payload_mapping.items) {
    createParams(
      'itemsParams',
      apiParams.itemsParams,
      target.payload_mapping.items[0]
    )
    apiParams.itemsParams.splice(6, 1)
  }

  // subscriptionsParams
  if (target.payload_mapping.subscriptions) {
    createParams(
      'subscriptionsParams',
      apiParams.subscriptionsParams,
      target.payload_mapping.subscriptions[0]
    )
  }

  // headerParams
  if (target.header_mapping) {
    createParams('headerParams', apiParams.headerParams, target.header_mapping)
  }

  // userParams
  if (target.payload_mapping.user?.externalIdentifiers?.clientUserId) {
    apiParams.userParams[2].value =
      target.payload_mapping.user.externalIdentifiers.clientUserId.slice(2, -2)
  } else {
    apiParams.userParams.splice(2, 1)
  }
  if (target.payload_mapping.user?.email) {
    apiParams.userParams[1].value = target.payload_mapping.user.email.slice(
      2,
      -2
    )
  } else {
    apiParams.userParams.splice(1, 1)
  }
  if (target.payload_mapping.user?.phone) {
    apiParams.userParams[0].value = target.payload_mapping.user.phone.slice(
      2,
      -2
    )
  } else {
    apiParams.userParams.splice(0, 1)
  }

  // customParams
  if (
    target.payload_mapping.user?.externalIdentifiers?.custom &&
    target.payload_mapping.user?.externalIdentifiers?.custom[0]
  ) {
    createParams(
      'customParams',
      apiParams.customParams,
      target.payload_mapping.user.externalIdentifiers.custom[0]
    )
  }

  // queryParams
  if (target.payload_mapping) {
    createParams('queryParams', apiParams.queryParams, target.payload_mapping)
  }

  // sourceParams
  const key_name = source.key_name
  let timeZone = key_name.match(/<&\S+&>/)
  if (timeZone) {
    timeZone = timeZone.toString().replace('<&', '').replace('&>', '')
  }
  let fileName = key_name.replace(/<&\S+&>/, '')
  apiParams.sourceParams[0].value = client?.clientName ? client.clientName : ''
  apiParams.sourceParams[1].value = client?.clientId ? client.clientId : ''
  apiParams.sourceParams[2].value = fileName
  apiParams.sourceParams[3].value = client?.fileType ? client.fileType : ''
  apiParams.sourceParams[4].value = client?.delimiter ? client.delimiter : ''
  apiParams.sourceParams[5].value = client?.ticketId ? client.ticketId : ''

  // scheduleParams
  apiParams.scheduleParams[0].value = schedule?.frequency
    ? schedule.frequency
    : ''
  apiParams.scheduleParams[1].value = schedule?.triggerTime
    ? schedule.triggerTime
    : ''
  apiParams.scheduleParams[2].value = timeZone

  // Change h1 title from Imported Payload to the name of the API
  const api = getApiFromUrl(apiParams.url)
  document.querySelector('h1').textContent = api

  console.log('apiParams AFTER:', apiParams)
}

// Update the json payload when various change events fire
function updatePayload (e, paramsId) {
  // console.log("LISTENER:", e)
  // console.log("LISTENER TYPE:", e.type)
  console.log('EVENT:', e.type)
  console.log('PARAMS ID:', paramsId)

  let url = ''
  let method = ''
  let header_mapping = {}
  let params = {}
  let prop = {}
  let items = {}
  let price = {}
  let subscriptions = {}
  let user = {}
  let custom = {}
  let payload_mapping = {}
  let targetPayload = {}
  let source = {}
  let schedule = {}
  let key_name = ''
  let extension = ''
  let sourcePayload = {}
  let clientPayload = {}
  let schedulePayload = {}

  // Set variable values from query selectors
  // Pass the id, the selector, and whether or not the value result should be enclosed in curly braces (true|false)
  url = document.querySelector(`#${paramsId} ` + '[data-url]', false).value
  method = document.querySelector(
    `#${paramsId} ` + '[data-method]',
    false
  ).value
  header_mapping = keyValuePairsToObjects(
    paramsId,
    document.querySelector(`#${paramsId} ` + '[data-request-headers]'),
    false
  ).tempObject
  if (url.match('subscriptions')) {
    console.log('URL.MATCH: SUBSCRIPTIONS')
    console.log('curlyBraces OFF')
    params = keyValuePairsToObjects(
      paramsId,
      document.querySelector(`#${paramsId} ` + '[data-query-params]'),
      false
    ).tempObject
  } else {
    params = keyValuePairsToObjects(
      paramsId,
      document.querySelector(`#${paramsId} ` + '[data-query-params]'),
      true
    ).tempObject
  }
  prop = keyValuePairsToObjects(
    paramsId,
    document.querySelector(`#${paramsId} ` + '[data-props]'),
    true
  ).tempObject
  items = keyValuePairsToObjects(
    paramsId,
    document.querySelector(`#${paramsId} ` + '[data-items]'),
    true
  ).tempObject
  price = keyValuePairsToObjects(
    paramsId,
    document.querySelector(`#${paramsId} ` + '[data-price]'),
    true
  ).tempObject
  subscriptions = keyValuePairsToObjects(
    paramsId,
    document.querySelector(`#${paramsId} ` + '[data-subscriptions]'),
    false
  ).tempObject
  user = keyValuePairsToObjects(
    paramsId,
    document.querySelector(`#${paramsId} ` + '[data-user]'),
    true
  ).tempObject
  custom = keyValuePairsToObjects(
    paramsId,
    document.querySelector(`#${paramsId} ` + '[data-user-custom]'),
    true
  ).tempObject
  source = keyValuePairsToObjects(
    paramsId,
    document.querySelector(`#${paramsId} ` + '[data-source]'),
    false
  ).tempObject
  schedule = keyValuePairsToObjects(
    paramsId,
    document.querySelector(`#${paramsId} ` + '[data-schedule]'),
    false
  ).tempObject
  jsonBody = document.querySelector(
    `#${paramsId} ` + '.ace_content'
  )?.textContent

  // console.log("JSON BODY:", jsonBody)
  // console.log("URL", url)
  // console.log("METHOD:", method)
  // console.log("HEADERS:", header_mapping)

  // console.log("PARAMS:", params)
  // Object.entries(params).forEach((entry) => {
  //   const [key, value] = entry
  //   console.log(`${key}: ${value}`)
  // })
  // if (params && Object.entries(params).length > 0) {
  //   Object.entries(params).forEach((entry) => {
  //     const [key, value] = entry
  //     payload_mapping[key] = value
  //   })
  // }

  // console.log("PARAMS:", params)
  if (params && Object.entries(params).length > 0) {
    payload_mapping = params
  } else {
    document
      .querySelector(`#${paramsId} ` + '[data-query-params-section]')
      .classList.add('d-none')
  }

  // console.log("PROP:", prop)
  if (prop && Object.entries(prop).length > 0) {
    payload_mapping.properties = prop
  } else {
    document
      .querySelector(`#${paramsId} ` + '[data-props-section]')
      .classList.add('d-none')
  }

  // console.log("ITEMS:", items)
  if (items && Object.entries(items).length > 0) {
    payload_mapping.items = [items]
  } else {
    document
      .querySelector(`#${paramsId} ` + '[data-items-section]')
      .classList.add('d-none')
  }

  // console.log("PRICE:", price)
  if (price && Object.entries(price).length > 0) {
    payload_mapping.items[0].price = [price]
  } else {
    document
      .querySelector(`#${paramsId} ` + '[data-price-section]')
      .classList.add('d-none')
  }

  // console.log("SUBSCRIPTIONS:", subscriptions)
  if (subscriptions && Object.entries(subscriptions).length > 0) {
    payload_mapping.subscriptions = [subscriptions]
  } else {
    document
      .querySelector(`#${paramsId} ` + '[data-subscriptions-section]')
      .classList.add('d-none')
  }

  // console.log("USER:", user)
  if (user && Object.entries(user).length > 0) {
    payload_mapping.user = user
  } else {
    document
      .querySelector(`#${paramsId} ` + '[data-user-params-section]')
      .classList.add('d-none')
  }

  // console.log("CUSTOM IDENTIFIER:", custom)
  if (custom && Object.entries(custom).length > 0) {
    payload_mapping.user.externalIdentifiers.custom = []
    payload_mapping.user.externalIdentifiers.custom[0] = custom
  } else {
    document
      .querySelector(`#${paramsId} ` + '[data-user-custom-section]')
      .classList.add('d-none')
  }

  // console.log("PAYLOAD MAPPING", payload_mapping)

  targetPayload = {
    url,
    method,
    header_mapping,
    payload_mapping
  }

  sourcePayload = {
    bucket_name: 'solutions-sftp-bucket-prod',
    options: {
      match_prefix: true,
      max_files: 1
    }
  }

  // Concatenate source params
  if (source && Object.entries(source).length > 0) {
    if (source['clientName']) clientPayload.clientName = source['clientName']
    if (source['clientId']) clientPayload.clientId = source['clientId']
    if (source['fileName']) clientPayload.fileName = source['fileName']
    if (source['fileType']) clientPayload.fileType = source['fileType']
    if (source['delimiter']) clientPayload.delimiter = source['delimiter']
    if (source['ticketId']) clientPayload.ticketId = source['ticketId']
    if (source['fileName'])
      key_name = `${source['fileName'].replace(/(\.\w*)/, '')}`
    // console.log("KEY_NAME:", key_name)
    if (key_name && source['fileName'].match(/\.\w*/)) {
      extension = source['fileName'].match(/\.\w*/).toString()
      // console.log("EXTENSION", extension)
      key_name += extension
    }
    if (source['timeZone']) key_name += `<&${source['timeZone']}&>`
    sourcePayload.key_name = key_name
    if (source['delimiter']) {
      delimiter = source['delimiter']
      // console.log("DELIMITER:", delimiter)
      sourcePayload.delimiter = delimiter
    }
  }

  // Concatenate schedule params
  if (schedule && Object.entries(schedule).length > 0) {
    if (schedule['frequency']) schedulePayload.frequency = schedule['frequency']
    if (schedule['triggerTime'])
      schedulePayload.triggerTime = schedule['triggerTime']
    if (schedule['timeZone']) schedulePayload.timeZone = schedule['timeZone']
  }

  // console.log("CLIENT PAYLOAD:", clientPayload)
  edsPayload.clientPayload = clientPayload
  // console.log("TARGET PAYLOAD:", clientPayload)
  edsPayload.targetPayload = targetPayload
  // console.log("SOURCE PAYLOAD:", sourcePayload)
  edsPayload.sourcePayload = sourcePayload
  // console.log("SCHEDULE PAYLOAD:", schedulePayload)
  edsPayload.schedulePayload = schedulePayload

  console.log('EDS PAYLOAD:', edsPayload)
  if (e.type === 'change') {
    console.log('CHANGE EVENT: EDS-RECENT -> LOCAL STORAGE')
    localStorage.setItem('eds-recent', JSON.stringify(edsPayload, null, 2))
    // console.log("LOCAL STORAGE:", localStorage.getItem("eds-recent"))
  } else {
    // Click or Keyup event will trigger updates to these payloads
    updateTargetPayloadBody(paramsId, targetPayload)
    updateSourcePayloadBody(paramsId, sourcePayload)
  }
}
