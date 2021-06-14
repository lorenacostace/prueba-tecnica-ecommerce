export async function postCart({ api, endpoint, body }) {
    return api.post(endpoint, {
        id: body.id,
        colorCode: body.selectors.colors,
        storageCode: body.selectors.storage,
    }).then(result => result.data);
}
