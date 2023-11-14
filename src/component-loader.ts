import {getPathByAlias} from "./component-alias";

/**
 * 相对路径正则表达式
 */
const relativePathReg = /^\.+\//;

/**
 * 获取真实路径
 * @param path 路径,可以是alias,也可以是相对路径或者绝对路径
 */
const getRealPath = function (path: string): string {
    path = getPathByAlias(path) ?? path;
    const lowerCaseUrl = path.toLowerCase();
    if (!lowerCaseUrl.startsWith('http://') && !lowerCaseUrl.startsWith('https://')) {
        if (path.startsWith('/')) { //根目录
            path = window.location.origin + path;
        } else { //相对路径
            if (!relativePathReg.test(path)) {
                path = './' + path;
            }
            // 获取路径种所有的../
            const currentPathArr = window.location.pathname.split('/').slice(0, -1);
            const pathArr = path.split('/');
            let subIndex = 0;
            for (let i = 0; i < pathArr.length - 1; i++) {
                if (pathArr[i] === ".") {
                } else if (pathArr[i] === '..') {
                    currentPathArr.pop();
                } else {
                    subIndex = i;
                    break;
                }
            }
            path = window.location.origin + currentPathArr.join('/') + '/' + pathArr.slice(subIndex - 1).join('/');
        }
    }
    return path;
}

/**
 * 远程组件加载器
 * @param path 路径,可以是alias,也可以是相对路径或者绝对路径
 */
export const loadComponent = function (path: string): Promise<PluginModule> {
    const realPath = getRealPath(path)
    return import(realPath);
}