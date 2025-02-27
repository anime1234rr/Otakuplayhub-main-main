globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_a_wdovWq.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cie12lse.mjs';
export { renderers } from '../renderers.mjs';

const $$Anime = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Anime - OtakuPlayhub" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center py-10"> <h1 class="text-4xl font-bold">Anime</h1> <p class="mt-4 text-lg">¡Anime de la comunidad!</p> </section> <div class="grid grid-cols-3 gap-4"> <div class="anime-section"> <a href="/Anime/pupa"> <img src="/images/Pupa.jpg" alt="Pupa"> <h3>Pupa</h3> </a> </div> <div class="anime-section"> <a href="/Anime/another"> <img src="/images/another.jpg" alt="Another"> <h3>Another</h3> </a> </div> <div class="Anime-section"> <a href="/Anime/Boku-no-piko"> <img src="/images/Boku no piko.jpg" alt="Boku no piko"> <h3>Boku no piko</h3> </a> </div>  </div> ` })}`;
}, "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Anime.astro", void 0);

const $$file = "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Anime.astro";
const $$url = "/Anime";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Anime,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
