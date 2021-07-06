
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export const updateFilter = (products, value) => {
    const valueRegex = escapeRegExp(value)
    return products.filter((item) => {
        const regex = new RegExp(valueRegex, 'i')
        return (item.brand.match(regex) || item.model.match(regex));
    })
}
