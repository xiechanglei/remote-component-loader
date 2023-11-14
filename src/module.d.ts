type AliasGroup = {
    [key: string]: string
}

interface PluginComponent{
    destroy: () => void
}
interface PluginModule {
    render: (container: HTMLElement, options: unknown) => void
}