function transformToUrlString(stringToUse: string) {
  return stringToUse.toLowerCase().replaceAll(new RegExp(' |_', 'g'), '-')
}

function checkCurrentUrl(parameterToCompare: string, index: number, currentLocation: string, pageUrl: string) {
  return currentLocation.includes(transformToUrlString(parameterToCompare)) || (currentLocation === pageUrl && !index)
}

export {
  transformToUrlString,
  checkCurrentUrl
}