const CONFIG = {
 XSRF_TOKEN: decodeURIComponent(document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, "$1")),
 PHOTO_URL: 'http://localhost/~ruby/herbs-vue/dist/'
}

export { CONFIG };