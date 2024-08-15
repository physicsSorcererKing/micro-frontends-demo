// import './set-public-path'
import { createApp, h } from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'
import { cssLifecycleFactory } from 'vite-plugin-single-spa/ex'

// createApp(App).mount('#app')

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          name: this.name
          // mountParcel: this.mountParcel,
          // singleSpa: this.singleSpa
        }
      })
    }
  },
  handleInstance: (app) => {
    // app.use(router);
  }
})

// IMPORTANT:  The argument passed here depends on the file name.
const cssLifecycles = cssLifecycleFactory('psk-app-nav-vue')

export const bootstrap = [cssLifecycles.bootstrap, vueLifecycles.bootstrap]
export const mount = [cssLifecycles.mount, vueLifecycles.mount]
export const unmount = [cssLifecycles.unmount, vueLifecycles.unmount]
