const apiKeyPagarMe = 'ak_test_jwnUVcRJ0V4k3Py6K1qniuxOFNZqvl'

const url = (apiKey) =>
  /* eslint-disable */
  (path) => `https://api.pagar.me/1/${path}?api_key=${apiKey}`


module.exports = url(apiKeyPagarMe)