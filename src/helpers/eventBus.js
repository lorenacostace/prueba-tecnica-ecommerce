export const _dispatchEvent = (eventName, payload) => {
    window.dispatchEvent(new CustomEvent(eventName, {
        detail: payload
    }));
}

export const _addEventListener = (eventName, handler) => {
    window.addEventListener(eventName, handler);
}

export const _removeEventListener = (eventName, handler) => {
    window.removeEventListener(eventName, handler);
}
