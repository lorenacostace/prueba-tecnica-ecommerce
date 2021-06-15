export const get = (key) => {
    return localStorage.getItem(key);
}

export const set = (key, value) => {
    localStorage.setItem(key, value);
}
