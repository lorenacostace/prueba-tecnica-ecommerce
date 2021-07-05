
export const updateFilter = (products, value) => {
    return products.filter((item) => {
        const regex = new RegExp(value, 'i')
        return (item.brand.match(regex) || item.model.match(regex));
    })
}
