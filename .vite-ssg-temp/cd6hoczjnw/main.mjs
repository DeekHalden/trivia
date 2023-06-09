import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { ViteSSG } from "vite-ssg/single-page";
import * as VueRouter from "vue-router";
const App_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(`<body${ssrRenderAttrs(_attrs)}><header><a href="">QUIZZY</a><a href=""><i></i></a></header>`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</body>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/Users/deek/Desktop/plure/trivia-vue/src/App.vue"]]);
const About = { template: "<div>About</div>" };
const routes = [
  // { path: '/', component: Home },
  { path: "/about", component: About }
];
VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  // history: VueRouter.createWebHashHistory(),
  routes
  // short for `routes: routes`
});
const createApp = ViteSSG(App, { routes });
export {
  createApp
};
