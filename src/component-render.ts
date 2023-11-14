import {loadComponent} from "./component-loader";

export const plugin = async function (component: string) {
    if (!component) {
        throw new Error('component is required')
    }
    let module = await loadComponent(component);
    return {
        render: (container: HTMLElement, options: unknown) => {
            if (!container) {
                throw new Error('container is required')
            }
            return module.render(container, options)
        }
    }
}