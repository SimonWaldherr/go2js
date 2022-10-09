"use strict";
exports.__esModule = true;
exports.getUrl = void 0;
var getUrl = function (baseUrl) {
    var _a, _b;
    if (baseUrl) {
        if (typeof baseUrl === 'string') {
            if (baseUrl.endsWith('/')) {
                return baseUrl.slice(0, -1);
            }
            return baseUrl;
        }
        else {
            throw new Error('invalid baseUrl');
        }
    }
    var metaUrl = (_a = import.meta) === null || _a === void 0 ? void 0 : _a.url;
    var currentScriptSrc = (_b = document === null || document === void 0 ? void 0 : document.currentScript) === null || _b === void 0 ? void 0 : _b.src;
    var locationHref = location.href;
    var url = metaUrl && typeof metaUrl === 'string'
        ? metaUrl
        : currentScriptSrc && typeof currentScriptSrc === 'string'
            ? currentScriptSrc
            : locationHref && typeof locationHref === 'string'
                ? locationHref
                : '.';
    return url.split('/').slice(0, -1).join('/');
};
exports.getUrl = getUrl;
