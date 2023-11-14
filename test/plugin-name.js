import {name} from "./modula.js"

export const render = (container, options) => {
    container.innerText = options.title + name
    return {
        destroy() {
            container.innerText = ''
        }
    }
}