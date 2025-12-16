/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const PRICE_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DESCONT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DESCONT = 20;

  let totalPreci = null;

  if (days >= LONG_TERM) {
    totalPreci = days * PRICE_DAY;

    return totalPreci - LONG_TERM_DESCONT;
  } else if (days >= SHORT_TERM) {
    totalPreci = days * PRICE_DAY;

    return totalPreci - SHORT_TERM_DESCONT;
  } else if (days < 3) {
    totalPreci = days * PRICE_DAY;

    return totalPreci;
  }

  return totalPreci;
}

module.exports = calculateRentalCost;
