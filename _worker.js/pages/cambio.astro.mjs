globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_a_wdovWq.mjs';
export { renderers } from '../renderers.mjs';

const $$Cambio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="slider-wrapper wrapernum3"> <!-- has descubierto mi secreto--> <h1>
hello guys, ho are you doing today?
</h1> </div>`;
}, "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/cambio.astro", void 0);

const $$file = "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/cambio.astro";
const $$url = "/cambio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cambio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
