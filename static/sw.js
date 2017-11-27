importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wp-vue-ssr",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.388baab5c6ee4f4b3832.js",
    "revision": "16875fe6c287d6326f628512683e829d"
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
    "url": "/_nuxt/manifest.671489a07200a50799ef.js",
    "revision": "dcc12b297c3c363e0148e1fdbfe5f0fe"
  },
  {
    "url": "/_nuxt/pages/_slug/index.bb50ff0d98fa544f1e29.js",
    "revision": "6b82162312a0b045f1a437e4be326c79"
  },
  {
    "url": "/_nuxt/pages/about/index.be4bfdd50d37884f8340.js",
    "revision": "bdeb5c2cd67b47c9083a48b6c652e11e"
  },
  {
    "url": "/_nuxt/pages/category/_slug/index.e1ee25483035d9149125.js",
    "revision": "42e68d2c4abeebe7c7bf2c00a18b9907"
  },
  {
    "url": "/_nuxt/pages/index.0ce0133ee8e8cfb8a9a1.js",
    "revision": "fca6ea402070077701ba4d6e11494848"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

