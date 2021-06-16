/*
* Se ha preparado la configuración de la Api para el caso en el que tengan distintos dominios resulte sencillo el cambio
* */
export const configApi = {
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://front-test-api.herokuapp.com/' : 'https://front-test-api.herokuapp.com/',
    apiVersion: process.env.NODE_ENV === 'production' ? 'api/' : 'api/',
    endpoint: {
        product: '/product',
        cart: '/cart'
    }
}
