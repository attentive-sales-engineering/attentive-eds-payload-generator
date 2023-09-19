function updateTargetPayloadBody (id, targetPayload) {
  console.log('TARGET PAYLOAD:', targetPayload)
  const jsonReq = JSON.stringify(targetPayload, null, 2)
  // console.log('JSON BODY:', jsonBody)
  console.log(
    `updateTargetPayloadBody: .querySelector(#${id} [data-target-payload])`
  )

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
  console.log('SOURCE PAYLOAD:', sourcePayload)
  const jsonReq = JSON.stringify(sourcePayload, null, 2)
  // console.log('JSON BODY:', jsonBody)
  console.log(
    `updateSourcePayloadBody: .querySelector(#${id} [data-source-payload])`
  )

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

function keyValuePairsToObjects (id, container) {
  const pairs = container.querySelectorAll(`#${id} [data-key-value-pair]`)
  console.log('PAIRS:', pairs)
  const tempObject = {}
  return [...pairs].reduce((data, pair) => {
    let container = tempObject
    const key = pair.querySelector('[data-key]').value
    console.log('KEY:', key)
    let value = pair.querySelector('[data-value]').value
    console.log('VALUE:', value)
    console.log('DATA:', data)
    key.split('.').map((k, i, arr) => {
      console.log('k, i, arr:', k, i, arr)
      console.log('tempObject before:', tempObject)
      console.log('container before:', container)
      if (i == arr.length - 1) {
        container = container[k] = value
      } else {
        container = container[k] = {}
        return
      }
      console.log('container afer:', container)
      console.log('tempObject after:', tempObject)
    })
    console.log('tempObject outside:', tempObject)
    // if (key === '' || value === null || value === '') return data
    // return { ...data, [key]: value }
    return { ...data, tempObject }
  }, {})
}
