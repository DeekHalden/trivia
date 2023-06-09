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
const Home = { template: `    <main>
<header>
  <div>
    <img src="/images/Image-1.png" alt="Image-1">
  </div>
  <meter></meter>
</header>
<section class="qs">
  <mark data-text="question " data-text-2=" of " data-index="3" data-amount="10"></mark>
  <h4>What is the capital of the United States?</h4>
  <div class="qs-row">
    <a href="<%= VITE_ENV === 'prod' ? '/trivia/trivia-page-2' : '/trivia-page-2.html' %>">
      <label for="a">
        <input id="a" type="radio" name="a" data-c="true">
        <div data-v="a" class="card">
          <p>Washington</p>
        </div>
      </label>
    </a>
    <a href="<%= VITE_ENV === 'prod' ? '/trivia/trivia-page-2' : '/trivia-page-2.html' %>">
      <label for="b">
        <input id="b" type="radio" name="a" data-c="false">
        <div data-v="b" class="card">
          <p>Long answer to show a lot of text</p>
        </div>
      </label>
    </a>
    <a href="<%= VITE_ENV === 'prod' ? '/trivia/trivia-page-2' : '/trivia-page-2.html' %>">
      <label for="c">
        <input id="c" type="radio" name="a" data-c="false">
        <div data-v="c" class="card">
          <p>New York City</p>
        </div>
      </label>
    </a>
    <a href="<%= VITE_ENV === 'prod' ? '/trivia/trivia-page-2' : '/trivia-page-2.html' %>">
      <label for="d">
        <input id="d" type="radio" name="a" data-c="false">
        <div data-v="d" class="card">
          <p>Ottawa</p>
        </div>
      </label>
    </a>
  </div>
  <div>
    <div id="banner"></div>
    <span></span>
    <span></span>
  </div>
  <div class="answer">
  </div>
</section>
<section class="cta">
  <a href="<%= VITE_ENV === 'prod' ? '/trivia/trivia-page-2' : '/trivia-page-2.html' %>" class="btn submit">next
    ❯</a>
</section>
</main>` };
const About = { template: "<div>About</div>" };
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
];
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes
  // short for `routes: routes`
});
const createApp = ViteSSG(App, { routes: router });
export {
  createApp
};
