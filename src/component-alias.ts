const aliasGroup: AliasGroup = {}

/**
 * 配置别名，用于全局管理远程插件，如：
 * ```js
 * configAlias({
 *    'my-chart-plugin': 'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
 *    'my-flow-plugin': 'https://cdn.bootcss.com/vue-router/3.0.3/vue-router.min.js'
 * })
 * @param {AliasGroup} alias 别名
 */
export const configAlias = function (alias: AliasGroup = {}): void {
    Object.assign(aliasGroup, alias)
}

/**
 * 根据别名获取远程插件路径
 * @param key 别名
 */
export const getPathByAlias = function (key: string): string | undefined {
    return aliasGroup[key]
}