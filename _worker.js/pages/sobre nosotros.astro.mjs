globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_a_wdovWq.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cie12lse.mjs';
export { renderers } from '../renderers.mjs';

const $$SobreNosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About - OtakuPlayhub" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center py-10"> <h1 class="text-4xl font-bold">About</h1> </section>  <div class="mt-6 text-center"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
🎮 ¿Qué puedes encontrar aquí?
</h2> <section class="py-12 px-9 text-left"> <ul class="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300 ml-4"> <li>✅ <strong>Noticias y lanzamientos</strong> de anime, manga y videojuegos.</li> <li>✅ <strong>Reseñas y análisis</strong> de series, películas y juegos.</li> <li>✅ <strong>Foros y comunidad</strong> donde interactuar con otros fans.</li> <li>✅ <strong>Eventos y concursos</strong> con premios exclusivos.</li> <li>✅ <strong>Tienda y recomendaciones</strong> de productos otaku.</li> </ul> </section></div> ` })}`;
}, "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Sobre nosotros.astro", void 0);

const $$file = "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Sobre nosotros.astro";
const $$url = "/Sobre nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SobreNosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
