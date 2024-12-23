/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
  let uniqueGifts = new Set(gifts)
  let result = Array.from(uniqueGifts).sort((x, y) => x - y)
  return result
}

prepareGifts([12,2])