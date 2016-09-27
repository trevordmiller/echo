export const isLocalStorageSupported = (() => {
  try {
    const key = 'is-local-storage-supported'
    global.localStorage.setItem(key, true)
    global.localStorage.removeItem(key)
    return true
  } catch(e) {
    return false
  }
})()
