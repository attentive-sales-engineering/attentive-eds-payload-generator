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
  const element = document
    .querySelector(`#${id} [data-key-value-template]`)
    .content.cloneNode(true)
  let thisKey = element.querySelector('[data-key]')
  thisKey.value = key || null
  let thisValue = element.querySelector('[data-value]')
  thisValue.value = value || null
  thisValue.placeholder = placeholder || 'Value'

  // Show EnvVar values
  if (thisValue.value === '') {
    thisValue.value = localStorage.getItem(key)
  }

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

  // Update button
  element.querySelector('[data-update-btn]').addEventListener('click', e => {
    closest = e.target.closest('[data-key-value-pair]')
    console.log('UPDATE CLOSEST', closest)
    if (typeof newEnvVarDialog.showModal === 'function') {
      console.log('NEW ENV VAR DIALOG', newEnvVarDialog)
      updatedKey = closest.querySelector('[data-key]').value
      console.log('UPDATEDKEY', updatedKey)
      newEnvVarDialog.querySelector('[data-key]').value = updatedKey
      newEnvVarDialog.querySelector('[data-value]').value =
        localStorage.getItem(updatedKey)
      newEnvVarDialog.querySelector('[data-value]').placeholder =
        closest.querySelector('[data-value]').placeholder
      newEnvVarDialog.showModal()

      // Enter key listener -> Listen for the "Enter" key in newEnvVar modal
      newEnvVarDialog.addEventListener('keydown', e => {
        if (e.code === 'Enter') {
          setLocalStorage()
          thisValue.value = localStorage.getItem(thisKey.value)
        }
      })

      // Save listener -> On newEnvVar dialog "close" because of [method="dialog"]
      // Triggered via Cancel & Save buttons or Enter keypress
      newEnvVarDialog.addEventListener('close', function onClose () {
        if (newEnvVarDialog.returnValue !== 'cancel') {
          setLocalStorage()
          thisValue.value = localStorage.getItem(thisKey.value)
        }
      })

      // Store item in localStorage and refresh window
      function setLocalStorage () {
        if (
          newEnvVarDialog.querySelector('[data-key]').value !== '' &&
          newEnvVarDialog.querySelector('[data-value]').value !== ''
        ) {
          updatedValue = newEnvVarDialog.querySelector('[data-value]').value
          // store the updatedValue for the updatedKey
          localStorage.setItem(updatedKey, updatedValue)
          // Update the value of all matching keys that are already loaded in browser
          document.querySelectorAll('[data-key]').forEach(item => {
            if (item.value === updatedKey) {
              item.parentElement.querySelector('[data-value]').value =
                updatedValue
            }
          })
          // window.location = window.location.href
        }
      }
    }
  })

  // Remove button
  element.querySelector('[data-remove-btn]').addEventListener('click', e => {
    closest = e.target.closest('[data-key-value-pair]')
    closest.remove()
    if (id === 'settings') {
      let localStorageKey = closest.querySelector('[data-key]').value
      localStorage.removeItem(localStorageKey)
      window.location = window.location.href
    }
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

function keyValuePairsToObjects (id, container, crulyBraces) {
  const pairs = container.querySelectorAll(`#${id} [data-key-value-pair]`)
  // console.log('PAIRS:', pairs)
  const tempObject = {}
  return [...pairs].reduce((data, pair) => {
    let container = tempObject
    const key = pair.querySelector('[data-key]').value
    // console.log('KEY:', key)
    let value
    // let value = pair.querySelector('[data-value]').value
    if (crulyBraces === true) {
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

// Parse the eds json files stored in local storage
function parseImportFile (edsFile) {
  console.log('CUSTOM or RECENT:', edsFile)

  let importFile
  if (edsFile == 'custom') {
    importFile = JSON.parse(localStorage.getItem('eds-import'))
  } else if (edsFile == 'recent') {
    importFile = JSON.parse(localStorage.getItem('eds-recent'))
  }
  console.log('IMPORT OBJECT:', importFile)
  if (importFile === null)
    window.location.href = '../../attentive/custom-attributes'

  // Call the function here
  // doSomething with the ImportFile
  // parseThisImportFile(custom|recent)

  let target = {}
  target = importFile.targetPayload
  console.log('TARGET:', target)
  let source = {}
  source = importFile.sourcePayload
  console.log('SOURCE:', source)
  let client = {}
  client = importFile.clientPayload
  console.log('CLIENT:', client)

  function createParams (paramName, myObject, myParams) {
    // console.log('paramName', paramName)
    Object.entries(myParams).forEach(entry => {
      const [key, value] = entry
      // console.log(`PROP ${key}: ${value}`)
      if (paramName === 'queryParams') {
        if (
          `${key}` === 'properties' ||
          `${key}` === 'items' ||
          `${key}` === 'user'
        ) {
          return
        }
      }

      let val = value
      if (key != 'Authorization') {
        val = val.slice(2, -2)
      }

      const thisObj = {
        key: key,
        value: val,
        placeholder: ''
      }

      myObject.push(thisObj)
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

  // headerParams
  if (target.header_mapping) {
    createParams('headerParams', apiParams.headerParams, target.header_mapping)
  }

  // userParams
  if (target.payload_mapping.user.externalIdentifiers?.clientUserId) {
    apiParams.userParams[2].value =
      target.payload_mapping.user.externalIdentifiers.clientUserId.slice(2, -2)
  } else {
    apiParams.userParams.splice(2, 1)
  }
  if (target.payload_mapping.user.email) {
    apiParams.userParams[1].value = target.payload_mapping.user.email.slice(
      2,
      -2
    )
  } else {
    apiParams.userParams.splice(1, 1)
  }
  if (target.payload_mapping.user.phone) {
    apiParams.userParams[0].value = target.payload_mapping.user.phone.slice(
      2,
      -2
    )
  } else {
    apiParams.userParams.splice(0, 1)
  }

  // customParams
  if (target.payload_mapping.user.externalIdentifiers?.custom[0]) {
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
  let dateFormat = key_name.match(/\[\[\w+\]\]/)
  if (dateFormat) {
    dateFormat = dateFormat.toString().replace('[[', '').replace(']]', '')
  }
  let timeZone = key_name.match(/<&\S+&>/)
  if (timeZone) {
    timeZone = timeZone.toString().replace('<&', '').replace('&>', '')
  }
  let fileName = key_name.replace(/\[\[\w+\]\]/, '').replace(/<&\S+&>/, '')
  apiParams.sourceParams[0].value = client?.clientName ? client.clientName : ''
  apiParams.sourceParams[1].value = client?.clientId ? client.clientId : ''
  apiParams.sourceParams[2].value = fileName
  apiParams.sourceParams[3].value = source.delimiter ? source.delimiter : ''
  apiParams.sourceParams[4].value = dateFormat
  apiParams.sourceParams[5].value = timeZone

  console.log('apiParams AFTER:', apiParams)
}
