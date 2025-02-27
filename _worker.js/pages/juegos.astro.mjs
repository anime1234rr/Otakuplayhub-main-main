globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../chunks/astro/server_a_wdovWq.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cie12lse.mjs';
export { renderers } from '../renderers.mjs';

const $$Juego = createComponent(($$result, $$props, $$slots) => {
  const link = "ruta/a/enlace";
  const imagen = "ruta/a/imagen.jpg";
  const titulo = "T\xEDtulo del Juego";
  return renderTemplate`${maybeRenderHead()}<div class="juego-card"> <a${addAttribute(link, "href")}> <img${addAttribute(imagen, "src")}${addAttribute(titulo, "alt")}> <h3>${titulo}</h3> </a> </div>`;
}, "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/components/Juego.astro", void 0);

const $$Juegos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Juegos - OtakuPlayhub" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center py-10"> <h1 class="text-4xl font-bold">Juegos</h1> <p class="mt-4 text-lg">¡Juegos de la comunidad!</p> </section> <div> <iframe width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> <div class="grid grid-cols-3 gap-4"> ${renderComponent($$result2, "Juego", $$Juego, { "imagen": "/images/super-mario-bros.jpg", "titulo": "Super Mario Bros.", "link": "/juegos/super-mario-bros" })} ${renderComponent($$result2, "Juego", $$Juego, { "imagen": "/images/otro-juego.jpg", "titulo": "Otro Juego", "link": "/juegos/otro-juego" })}  </div> ` })}`;
}, "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Juegos.astro", void 0);

const $$file = "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Juegos.astro";
const $$url = "/Juegos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Juegos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
