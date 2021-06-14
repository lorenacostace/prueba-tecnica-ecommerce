export async function getProducts({ api, endpoint }) {
    return api.get(endpoint).then((result) => {
        return result.data;
    });
}

export async function getProductById({ api, endpoint, id }) {
    return api.get(`${endpoint}/${id}`).then((result) => {
        return result.data;
    });
}
