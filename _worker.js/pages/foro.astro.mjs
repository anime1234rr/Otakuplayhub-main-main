globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, j as renderScript } from '../chunks/astro/server_a_wdovWq.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cie12lse.mjs';
export { renderers } from '../renderers.mjs';

const $$Foro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Foro - OtakuPlayhub" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center py-10"> <h1 class="text-4xl font-bold">Foro</h1> <p class="mt-4 text-lg">¡Foros de la comunidad!</p> </section>  <section class="container mx-auto px-4"> <h2 class="text-2xl font-semibold">¡Bienvenido al foro de OtakuPlayhub!</h2> <p>Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto conmigo.</p> </section> <section id="comentarios"> <section class="text-center py-10"> <h1 class="text-4xl font-bold">¡Comentarios de la comunidad!</h1> </section> <div id="disqus_thread"></div> ${renderScript($$result2, "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Foro.astro?astro&type=script&index=0&lang.ts")} <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> </section> ` })}`;
}, "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Foro.astro", void 0);

const $$file = "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Foro.astro";
const $$url = "/Foro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Foro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
