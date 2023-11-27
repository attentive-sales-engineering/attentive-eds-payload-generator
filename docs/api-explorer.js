// This function determines the API from the URL for the
// SOW and onscreen page title when importing a job
function getApiFromUrl(url) {
  api = {}
  switch (url) {
    case 'https://api.attentivemobile.com/v1/attributes/custom':
      api.name = 'Custom Attributes'
      api.path = "../../api/custom-attributes"
      break
    case 'https://api.attentivemobile.com/v1/events/custom':
      api.name = 'Custom Events'
      api.path = "../../api/custom-events"
      break
    case 'https://api.attentivemobile.com/v1/events/ecommerce/add-to-cart':
      api.name = 'eCommerce Add to Cart'
      api.path = "../../api/ecommerce-add-to-cart"
      break
    case 'https://api.attentivemobile.com/v1/events/ecommerce/product-view':
      api.name = 'eCommerce Product View'
      api.path = "../../api/ecommerce-product-view"
      break
    case 'https://api.attentivemobile.com/v1/events/ecommerce/purchase':
      api.name = 'eCommerce Purchase'
      api.path = "../../api/ecommerce-purchase"
      break
    case 'https://api.attentivemobile.com/v1/identity-resolution/user-identifiers':
      api.name = 'Identity'
      api.path = "../../api/identity"
      break
    case 'https://api.attentivemobile.com/v1/text/send':
      api.name = 'Messages'
      api.path = "../../api/messages"
      break
    case 'https://api.attentivemobile.com/v1/privacy/delete-request':
      api.name = 'Privacy Request'
      api.path = "../../api/privacy-request"
      break
    case 'https://api.attentivemobile.com/v1/subscriptions':
      api.name = 'Subscribe'
      api.path = "../../api/subscribe"
      break
    case 'https://api.attentivemobile.com/v1/subscriptions/unsubscribe':
      api.name = 'Unsubscribe'
      api.path = "../../api/unsubscribe"
      break
    default:
      api.name = 'Custom Attributes'
      api.path = "../../api/custom-attributes"
  }
  return api
}

// This function updates the json payload displayed on screen on each click or keyup
function updateJsonPayloadBody(id, edsPayload) {
  // console.log('TARGET PAYLOAD:', request_details)
  let jsonReq

  // Render Target Payload
  jsonReq = JSON.stringify(edsPayload.request_details, null, 2)
  // console.log('JSON BODY:', jsonBody)
  aceJsonRequest = ace.edit(document.querySelector(`#${id} [data-target-payload]`))
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

  // Render Source Payload
  jsonReq = JSON.stringify(edsPayload.source_details, null, 2)
  // console.log('JSON BODY:', jsonBody)
  aceJsonRequest = ace.edit(document.querySelector(`#${id} [data-source-payload]`))
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

// This function renders the apiParam key/value pairs onscreen
function createKeyValuePair(id, key, value, placeholder, curlyBraces, paramElement) {
  // console.log('createKeyValuePair:', id, key, value, placeholder, paramElement)
  const element = document.querySelector(`#${id} [data-key-value-template]`).content.cloneNode(true)
  let thisKey = element.querySelector('[data-key]')
  thisKey.value = key || null
  let thisValue = element.querySelector('[data-value]')
  thisValue.value = value || null
  thisValue.placeholder = placeholder || 'Value'
  thisValue.dataset.curlyBraces = curlyBraces || 'true'
  // console.log("CURLY BRACES:", thisValue.dataset.curlyBraces)
  if (curlyBraces === 'false') {
    element.querySelector('[data-update-btn]').classList.remove("curly")
  }
  // Hide the curlyBraces toggle button in headers, source and schedule tabs
  if (paramElement === "[data-headers]" || paramElement === "[data-source-params]" || paramElement === "[data-source-encryption]" || paramElement === "[data-source-sftp]" || paramElement === "[data-schedule]") {
    element.querySelector('[data-update-btn]').classList.add("d-none")
  }
  element.querySelector('[data-update-btn]').addEventListener('click', e => {
    e.target.classList.toggle("curly")
    // console.log("CLICK TOGGLE")
    if (thisValue.dataset.curlyBraces === 'true') {
      thisValue.dataset.curlyBraces = 'false'
    } else {
      thisValue.dataset.curlyBraces = 'true'
    }
  })

  element.querySelector('[data-remove-btn]').addEventListener('click', e => {
    closest = e.target.closest('[data-key-value-pair]')
    closest.remove()
  })

  return element
}

// Create EDS Payload json objects from the input elements
function keyValuePairsToObjects(id, paramName, container) {
  // console.log("keyValuePairsToObjects: id, paramName, container:", id, paramName, container)
  // console.log("keyValuePairsToObjects PARAM NAME:", paramName)
  const pairs = container.querySelectorAll(`#${id} [data-key-value-pair]`)
  // console.log('PAIRS:', pairs)
  const tempObject = {}
  return [...pairs].reduce((data, pair) => {
    let container = tempObject
    const key = pair.querySelector('[data-key]').value
    // console.log('KEY:', key)
    let value = pair.querySelector('[data-value]').value
    let curly = pair.querySelector('[data-value]').dataset.curlyBraces || "true"
    // console.log("CURLY:", curly)
    if (curly === "true") {
      // Wrap properties in curly braces
      value = `{{${pair.querySelector('[data-value]').value}}}`
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
function parseImportFile(edsFile) {
  console.log('IMPORT:', edsFile)

  let importFile
  if (edsFile == 'import') {
    importFile = JSON.parse(localStorage.getItem('eds-import'))
  }
  console.log('IMPORT FILE:', importFile)
  if (importFile === null)
    window.location.href = '../../api/custom-attributes'

  let targetJson = {}
  let sourceJson = {}
  let meta = {}
  let schedule = {}

  // Check if this came from EDS
  if (importFile.mappingInfoOverride) {
    console.log("MAPPING INFO OVERRIDE = EDS GET")
    targetJson = JSON.parse(importFile.mappingInfoOverride)
    sourceJson = JSON.parse(importFile.sourceInfo)
  } else {
    console.log("LOCAL JSON IMPORT")
    targetJson = importFile.request_details
    sourceJson = importFile.source_details
    meta = importFile.metaPayload
    schedule = importFile.schedulePayload
  }

  console.log('TARGET JSON:', targetJson)
  console.log('SOURCE JSON:', sourceJson)
  console.log('META:', meta)
  console.log('SCHEDULE:', schedule)

  // Build the apiParams from the EDS Payload
  function createParams(paramName, paramObject, myParams) {
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
        if (`${key}` === 'properties' || `${key}` === 'items' || `${key}` === 'subscriptions' || `${key}` === 'user'
        ) {
          return
        }
      }

      // Remove curly braces from imported EDS job if they exist
      let val = value
      let curly = "false"
      if (val && typeof val === "string" && val.length > 0) {
        if (val.startsWith('{{')) {
          val = val.slice(2, -2)
          curly = "true"
        }
      }

      const thisObj = {
        key: key,
        value: val,
        placeholder: '',
        ["data-curly-braces"]: curly,
      }
      // console.log('PARAM OBJECT:', paramObject)
      // console.log('THIS OBJECT:', thisObj)

      paramObject.push(thisObj)
    })
  }

  apiParams.url = targetJson.url
  apiParams.method = targetJson.method

  // propParams
  if (targetJson.payload_mapping.properties) {
    createParams('propParams', apiParams.propParams, targetJson.payload_mapping.properties)
  }

  // priceParams
  if (targetJson.payload_mapping.items &&
    targetJson.payload_mapping.items[0].price[0]) {
    createParams('priceParams', apiParams.priceParams, targetJson.payload_mapping.items[0].price[0])
  }

  // itemsParams
  if (targetJson.payload_mapping.items) {
    createParams('itemsParams', apiParams.itemsParams, targetJson.payload_mapping.items[0])
    apiParams.itemsParams.splice(6, 1)
  }

  // subscriptionsParams
  if (targetJson.payload_mapping.subscriptions) {
    createParams('subscriptionsParams', apiParams.subscriptionsParams, targetJson.payload_mapping.subscriptions[0])
  }

  // headerParams
  if (targetJson.header_mapping) {
    createParams('headerParams', apiParams.headerParams, targetJson.header_mapping)
  }

  // userParams
  if (targetJson.payload_mapping.user?.externalIdentifiers?.clientUserId) {
    apiParams.userParams[2].value = targetJson.payload_mapping.user.externalIdentifiers.clientUserId.slice(2, -2)
  } else {
    apiParams.userParams.splice(2, 1)
  }
  if (targetJson.payload_mapping.user?.email) {
    apiParams.userParams[1].value = targetJson.payload_mapping.user.email.slice(2, -2)
  } else {
    apiParams.userParams.splice(1, 1)
  }
  if (targetJson.payload_mapping.user?.phone) {
    apiParams.userParams[0].value = targetJson.payload_mapping.user.phone.slice(2, -2)
  } else {
    apiParams.userParams.splice(0, 1)
  }

  // customParams
  if (targetJson.payload_mapping.user?.externalIdentifiers?.customIdentifiers && targetJson.payload_mapping.user?.externalIdentifiers?.customIdentifiers[0]) {
    createParams('customParams', apiParams.customParams, targetJson.payload_mapping.user.externalIdentifiers.customIdentifiers[0])
  }

  // queryParams
  if (targetJson.payload_mapping) {
    createParams('queryParams', apiParams.queryParams, targetJson.payload_mapping)
  }

  // sourceParams
  apiParams.sourceParams[0].value = sourceJson.key_name?.replace(/\<.*/, '')
  apiParams.sourceParams[1].value = sourceJson.delimiter
  apiParams.sourceParams[2].value = sourceJson.options.max_files

  // encryptionParams
  apiParams.encryptionParams[0].value = sourceJson.encryption?.type
  apiParams.encryptionParams[1].value = sourceJson.encryption?.private_key?.bucket_name
  apiParams.encryptionParams[2].value = sourceJson.encryption?.private_key?.key_name

  // sftpParams
  apiParams.sftpParams[0].value = sourceJson.host
  apiParams.sftpParams[1].value = sourceJson.username
  apiParams.sftpParams[2].value = sourceJson.password
  apiParams.sftpParams[3].value = sourceJson.port


  // metaParams
  apiParams.metaParams[0].value = meta?.clientName ? meta.clientName : ''
  if (importFile.mappingInfoOverride) {
    apiParams.metaParams[1].value = importFile.companyId
  } else {
    apiParams.metaParams[1].value = meta?.clientId ? meta.clientId : ''
  }
  apiParams.metaParams[2].value = meta?.ticketUrl ? meta.ticketUrl : ''
  if (importFile.companyTaskUuid) {
    apiParams.metaParams[3].value = "https://ui.attentivemobile.com/tactical/event-destinations/jobs/" + importFile.companyTaskUuid
  } else {
    apiParams.metaParams[3].value = meta?.taskUrl ? meta.taskUrl : ''
  }

  // scheduleParams
  apiParams.scheduleParams[0].value = schedule?.frequency ? schedule.frequency : ''
  apiParams.scheduleParams[1].value = schedule?.triggerTime ? schedule.triggerTime : ''
  if (importFile.mappingInfoOverride && sourceJson.key_name.match(/\<.*/)) {
    apiParams.scheduleParams[2].value = sourceJson.key_name.match(/\<.*/).toString().replace('<&', '').replace('&>', '')
  } else {
    apiParams.scheduleParams[2].value = schedule?.timeZone ? schedule.timeZone : ''
  }

  console.log('apiParams AFTER:', apiParams)

  // Change h1 title from Imported Payload to the name of the API
  const api = getApiFromUrl(apiParams.url)
  if (api.name.toLowerCase().includes("error")) {
    alert(api.name)
  } else {
    // console.log("API NAME:", api.name)
    // console.log("API PATH:", api.path)
    localStorage.setItem("apiParams", JSON.stringify(apiParams))
    window.location.href = api.path + "?import=true"
  }

}

// Update the edsPayload when various events fire (load, click, keyup)
function updatePayload(e, paramsId) {
  // console.log("LISTENER:", e)
  // console.log("LISTENER TYPE:", e.type)
  // console.log('EVENT:', e.type)
  // console.log('PARAMS ID:', paramsId)

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
  let request_details = {}
  let source = {}
  let schedule = {}
  let key_name = ''
  let source_details = {}
  let metaPayload = {}
  let schedulePayload = {}

  // Set variable values from query selectors
  // Pass the id, the selector, and whether or not the value result should be enclosed in curly braces (true|false)
  url = document.querySelector(`#${paramsId} ` + '[data-url]').value
  method = document.querySelector(`#${paramsId} ` + '[data-method]').value
  header_mapping = keyValuePairsToObjects(paramsId, "header_mapping", document.querySelector(`#${paramsId} ` + '[data-headers]')).tempObject
  params = keyValuePairsToObjects(paramsId, "params", document.querySelector(`#${paramsId} ` + '[data-query-params]')).tempObject
  prop = keyValuePairsToObjects(paramsId, "prop", document.querySelector(`#${paramsId} ` + '[data-props]')).tempObject
  items = keyValuePairsToObjects(paramsId, "items", document.querySelector(`#${paramsId} ` + '[data-items]')).tempObject
  price = keyValuePairsToObjects(paramsId, "price", document.querySelector(`#${paramsId} ` + '[data-price]')).tempObject
  subscriptions = keyValuePairsToObjects(paramsId, "subscriptions", document.querySelector(`#${paramsId} ` + '[data-subscriptions]')).tempObject
  user = keyValuePairsToObjects(paramsId, "user", document.querySelector(`#${paramsId} ` + '[data-user]')).tempObject
  custom = keyValuePairsToObjects(paramsId, "custom", document.querySelector(`#${paramsId} ` + '[data-user-custom]')).tempObject
  source = keyValuePairsToObjects(paramsId, "source", document.querySelector(`#${paramsId} ` + '[data-source-params]')).tempObject
  encryption = keyValuePairsToObjects(paramsId, "encryption", document.querySelector(`#${paramsId} ` + '[data-source-encryption]')).tempObject
  sftp = keyValuePairsToObjects(paramsId, "sftp", document.querySelector(`#${paramsId} ` + '[data-source-sftp]')).tempObject
  meta = keyValuePairsToObjects(paramsId, "meta", document.querySelector(`#${paramsId} ` + '[data-meta]')).tempObject
  schedule = keyValuePairsToObjects(paramsId, "schedule", document.querySelector(`#${paramsId} ` + '[data-schedule]')).tempObject
  jsonBody = document.querySelector(`#${paramsId} ` + '.ace_content')?.textContent

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


  // console.log("ENCRYPTION:", encryption)
  if (!encryption || Object.entries(encryption).length == 0) {
    // payload_mapping = encryption
    document.querySelector(`#${paramsId} ` + '[data-source-encryption-section]').classList.add('d-none')
  }

  // console.log("SFTP:", sftp)
  if (!sftp || Object.entries(sftp).length == 0) {
    document.querySelector(`#${paramsId} ` + '[data-source-sftp-section]').classList.add('d-none')
  }

  // console.log("PARAMS:", params)
  if (params && Object.entries(params).length > 0) {
    payload_mapping = params
  } else {
    document.querySelector(`#${paramsId} ` + '[data-query-params-section]').classList.add('d-none')
  }

  // console.log("PROP:", prop)
  if (prop && Object.entries(prop).length > 0) {
    payload_mapping.properties = prop
  } else {
    document.querySelector(`#${paramsId} ` + '[data-props-section]').classList.add('d-none')
  }

  // console.log("ITEMS:", items)
  if (items && Object.entries(items).length > 0) {
    payload_mapping.items = [items]
  } else {
    document.querySelector(`#${paramsId} ` + '[data-items-section]').classList.add('d-none')
  }

  // console.log("PRICE:", price)
  if (price && Object.entries(price).length > 0) {
    payload_mapping.items[0].price = [price]
  } else {
    document.querySelector(`#${paramsId} ` + '[data-price-section]').classList.add('d-none')
  }

  // console.log("SUBSCRIPTIONS:", subscriptions)
  if (subscriptions && Object.entries(subscriptions).length > 0) {
    payload_mapping.subscriptions = [subscriptions]
  } else {
    document.querySelector(`#${paramsId} ` + '[data-subscriptions-section]').classList.add('d-none')
  }

  // console.log("USER:", user)
  if (user && Object.entries(user).length > 0) {
    payload_mapping.user = user
  } else {
    document.querySelector(`#${paramsId} ` + '[data-user-params-section]').classList.add('d-none')
  }

  // console.log("CUSTOM IDENTIFIER:", custom)
  if (custom && Object.entries(custom).length > 0) {
    // console.log("CUSTOM")
    // if clientUserId was deleted, need to recreate the externalIdentifiers object
    if (payload_mapping.user.externalIdentifiers === undefined) {
      payload_mapping.user.externalIdentifiers = {}
    }
    payload_mapping.user.externalIdentifiers.customIdentifiers = []
    payload_mapping.user.externalIdentifiers.customIdentifiers[0] = custom
  } else {
    document.querySelector(`#${paramsId} ` + '[data-user-custom-section]').classList.add('d-none')
  }

  // If Identity API, map and transform User props to root of payload
  if (window.location.pathname.match("identity")) {
    if (payload_mapping.user) {
      payload_mapping = payload_mapping.user
      payload_mapping.customIdentifiers = payload_mapping.externalIdentifiers.customIdentifiers
      delete payload_mapping.externalIdentifiers
    }
  }

  // If Subscribe API, map and transform User props to root of payload
  if (window.location.pathname.match("api/subscribe")) {
    console.log("SUBSCRIBE")
    if (payload_mapping.user?.externalIdentifiers) {
      payload_mapping.externalIdentifiers = payload_mapping.user.externalIdentifiers
      delete payload_mapping.user.externalIdentifiers
      payload_mapping.externalIdentifiers.shopifyId = payload_mapping.user.shopifyId
      delete payload_mapping.user.shopifyId
      payload_mapping.externalIdentifiers.klaviyoId = payload_mapping.user.klaviyoId
      delete payload_mapping.user.klaviyoId
    }
    if (payload_mapping.language != undefined || payload_mapping.country != undefined) {
      payload_mapping.locale = {}
      payload_mapping.locale.language = payload_mapping.language
      delete payload_mapping.language
      payload_mapping.locale.country = payload_mapping.country
      delete payload_mapping.country
    }
  }

  // console.log("PAYLOAD MAPPING:", payload_mapping)


  request_details = {
    url,
    method,
    header_mapping,
    payload_mapping
  }

  source_details = {
    bucket_name: 'solutions-sftp-bucket-prod',
    options: {
      match_prefix: true,
      max_files: 1
    },
    encryption: {
      private_key: {}
    }
  }

  // Concatenate source params
  if (source && Object.entries(source).length > 0) {
    if (source['fileName']) {
      key_name = `${source['fileName']}`
    }
    if (schedule['timeZone']) {
      key_name += `<&${schedule['timeZone']}&>`
    }
    source_details.key_name = key_name
    if (source['delimiter']) {
      source_details.delimiter = source['delimiter']
    }
    if (source['maxFiles']) {
      source_details.options.max_files = source['maxFiles']
    }
  }

  // Concatenate encryption params
  if (encryption && Object.entries(encryption).length > 0) {
    if (encryption['encryptionType']) {
      source_details.encryption.type = encryption['encryptionType']
    }
    if (encryption['privateKeyBucket']) {
      source_details.encryption.private_key.bucket_name = encryption['privateKeyBucket']
    }
    if (encryption['privateKeyName']) {
      source_details.encryption.private_key.key_name = encryption['privateKeyName']
    }
  }

  // Concatenate sftp params
  if (sftp && Object.entries(sftp).length > 0) {
    if (sftp['host']) {
      source_details.host = sftp['host']
    }
    if (sftp['username']) {
      source_details.username = sftp['username']
    }
    if (sftp['password']) {
      source_details.password = sftp['password']
    }
    if (sftp['port']) {
      source_details.port = sftp['port']
    }
  }

  // Delete & update objects in source_details
  if (sftp && sftp['host']) {
    // Using client-hosted sftp, delete s3 bucket_name object
    delete source_details.bucket_name
    edsPayload.source_type = "sftp"
    source_details.filename = source_details.key_name
    delete source_details.key_name
  } else {
    edsPayload.source_type = "s3"
  }
  if (!encryption || !encryption['encryptionType']) {
    // File is not encrypted, delete encryption object
    delete source_details.encryption
  }


  // Concatenate meta params
  if (meta && Object.entries(meta).length > 0) {
    if (meta['clientName']) metaPayload.clientName = meta['clientName']
    if (meta['clientId']) metaPayload.clientId = meta['clientId']
    if (meta['ticketUrl']) metaPayload.ticketUrl = meta['ticketUrl']
    if (meta['taskUrl']) metaPayload.taskUrl = meta['taskUrl']
  }

  // Concatenate schedule params
  if (schedule && Object.entries(schedule).length > 0) {
    if (schedule['frequency']) schedulePayload.frequency = schedule['frequency']
    if (schedule['triggerTime']) schedulePayload.triggerTime = schedule['triggerTime']
    if (schedule['timeZone']) schedulePayload.timeZone = schedule['timeZone']
  }

  // console.log("META PAYLOAD:", metaPayload)
  edsPayload.metaPayload = metaPayload
  // console.log("TARGET PAYLOAD:", metaPayload)
  edsPayload.request_details = request_details
  // console.log("SOURCE PAYLOAD:", source_details)
  edsPayload.source_details = source_details
  // console.log("SCHEDULE PAYLOAD:", schedulePayload)
  edsPayload.schedulePayload = schedulePayload

  // Additional required EDS Payload objects
  // edsPayload.task_id = metaPayload.taskUrl
  edsPayload.task_id = metaPayload.taskUrl?.substring(metaPayload.taskUrl.lastIndexOf('/') + 1).toString()
  edsPayload.request_type = "http"
  edsPayload.response_details = {
    "response_predicates": {
      "successStatusCode": "[200]"
    }
  }
  edsPayload.auth_details = {}

  console.log("EDS PAYLOAD:", edsPayload)


  updateJsonPayloadBody(paramsId, edsPayload)
}
