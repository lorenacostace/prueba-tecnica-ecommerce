import { setup } from 'axios-cache-adapter'
import localforage from 'localforage'
import memoryDriver from 'localforage-memoryStorageDriver'
import { configApi } from '../config/api'
import {
    getProductById,
    getProducts
} from './product'
import { postCart } from "./cart";

const {
    endpoint,
    baseUrl,
    apiVersion
} = configApi;

async function configure () {
    await localforage.defineDriver(memoryDriver)
    const forageStore = localforage.createInstance({
        driver: [
            localforage.INDEXEDDB,
            localforage.LOCALSTORAGE,
            memoryDriver._driver
        ],
        name: 'cache'
    })
    return setup({
        baseURL: baseUrl + apiVersion,
        timeout: 5000,
        cache: {
            maxAge: 60 * 60 * 1000,
            store: forageStore,
            exclude: { query: false },
            key: req => req.url + JSON.stringify(req.params),
        }
    })
}

export const productRepository = {
    getProductById: (id) => configure().then(api => getProductById({ api, endpoint: endpoint.product, id})),
    getProducts: () => configure().then(api => getProducts({ api, endpoint: endpoint.product }))
}

export const cartRepository = {
    postCart: (body) => configure().then(api => postCart({ api, endpoint: endpoint.cart, body}))
}
