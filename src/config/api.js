export const configApi = {
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://front-test-api.herokuapp.com/' : 'https://003c7590-de68-437f-ba4e-165c1e71c532.mock.pstmn.io',
    apiVersion: process.env.NODE_ENV === 'production' ? 'api/' : '',
    endpoint: {
        product: '/product',
        cart: '/cart'
    }
}
