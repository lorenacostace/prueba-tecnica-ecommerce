export function wordSeparator(word) {
    return word.replace(/([A-Z])/g, ' $1').trim();
}

export function capitalize(word) {
    return `${word[0].toUpperCase() + word.slice(1)}`
}

export const objectToPascalKeys = (key, value) => {
    const name = wordSeparator(key);
    const parsedKey = capitalize(name)
    const parsedValue = Array.isArray(value) ? value.join(', ') : value;
    return {
        key: parsedKey,
        value: parsedValue
    }
}
