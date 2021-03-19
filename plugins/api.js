/* eslint-disable prettier/prettier */
export default function ({ $axios, store }, inject) {
  const api = $axios.create({
    baseURL: process.env.HiSKIO_BASE_API,
    headers: {
      common: {
        Accept: 'application/json, */*',
        ContentType: 'application/json',
      },

    },
  })

  // Inject to context as $api
  inject('api', api)
}
