globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, r as renderTemplate } from '../../chunks/astro/server_a_wdovWq.mjs';
export { renderers } from '../../renderers.mjs';

const $$post = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`// src/pages/posts/[post].astro
export const prerender = false;`;
}, "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/posts/[post].astro", void 0);

const $$file = "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/posts/[post].astro";
const $$url = "/posts/[post]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$post,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
