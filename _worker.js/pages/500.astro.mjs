globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, f as createAstro, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_a_wdovWq.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$500 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$500;
  const { error } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div>${error instanceof Error ? error.message : "Unknown error"}</div>`;
}, "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/500.astro", void 0);

const $$file = "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$500,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
