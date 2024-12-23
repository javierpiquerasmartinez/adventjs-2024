/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  let maxLength = 0
  names.forEach( x => {
    maxLength = (x.length > maxLength) ? x.length : maxLength
  })
  let result = `**${'*'.repeat(maxLength)}**\n`
  names.forEach( x => {
    result = result.concat(`* ${x.padEnd(maxLength, ' ')} *\n`)
  })
  result = result.concat(`**${'*'.repeat(maxLength)}**`)
  return result
}

createFrame(['javi', 'javier piqueras', 'ari', 'tanielli'])