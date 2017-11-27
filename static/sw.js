importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wp-vue-ssr",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.bfe136ef6161332e4205.js",
    "revision": "412836e242015f68d61c528764618167"
  },
  {
    "url": "/_nuxt/common.821c987f1d5ae1040a32.js",
    "revision": "b69ef1de03b768b0a07c102cd1aba0da"
  },
  {
    "url": "/_nuxt/layouts/default.c21e888d084cec9ec3c6.js",
    "revision": "e5597f1c32d7fb2e8f739fdbf8a40ecd"
  },
  {
    "url": "/_nuxt/manifest.d8cfbe95f696e05a0caf.js",
    "revision": "6000ca0e5b4db2d8293d086ecf550d90"
  },
  {
    "url": "/_nuxt/pages/_slug/index.2765feb292f2e317c6aa.js",
    "revision": "b501cf9d6390cb492d1b56504d2d55b7"
  },
  {
    "url": "/_nuxt/pages/about/index.be4bfdd50d37884f8340.js",
    "revision": "bdeb5c2cd67b47c9083a48b6c652e11e"
  },
  {
    "url": "/_nuxt/pages/category/_slug/index.26d9a92b02a90c441476.js",
    "revision": "71014d6cf89e61f968f7827ec41803c6"
  },
  {
    "url": "/_nuxt/pages/index.2c0613cc6436facbc083.js",
    "revision": "1fa37af9437d83478e66f7275eb6d204"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

