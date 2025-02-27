globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, j as renderScript } from '../chunks/astro/server_a_wdovWq.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cie12lse.mjs';
export { renderers } from '../renderers.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Faq - OtakuPlayhub" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center py-10"> <div class="faq-item mb-4 p-4 bg-gray-700 rounded-lg max-w-xl mx-auto"> <h2 class="text-2xl font-bold text-white mb-4 text-center">Preguntas Frecuentes (FAQ)</h2> </div></section> <section class="container mx-auto px-4"> <!-- preguntas echa por una weacion --> <div class="faq-item mb-4 p-4 bg-gray-700 rounded-lg max-w-xl mx-auto"> <details> <summary class="text-xl font-semibold text-blue-400 hover:underline">¿Qué es OtakuPlayhub?</summary> <p>OtakuPlayhub es un sitio web dedicado al anime y a los juegos, creado para la comunidad.</p> </details> </div> <div class="faq-item mb-4 p-4 bg-gray-700 rounded-lg max-w-xl mx-auto"> <details> <summary class="text-xl font-semibold text-blue-400 hover:underline">¿Cómo puedo unirme a OtakuPlayhub?</summary> <p>Para unirte a OtakuPlayhub, simplemente regístrate en el sitio web y comienza a interactuar con la comunidad.</p> </details> </div> <div class="faq-item mb-4 p-4 bg-gray-700 rounded-lg max-w-xl mx-auto"> <details> <summary class="text-xl font-semibold text-blue-400 hover:underline">¿Puedo recomendar animes o juegos en la plataforma?</summary> <p>¡Por supuesto! La comunidad está abierta a recomendaciones de anime y juegos. Puedes compartir tus favoritos en los foros o grupos.</p> </details> </div> <div class="faq-item mb-4 p-4 bg-gray-700 rounded-lg max-w-xl mx-auto"> <details> <summary class="text-xl font-semibold text-blue-400 hover:underline">¿Qué tipo de contenido puedo encontrar en OtakuPlayhub?</summary> <p>En OtakuPlayhub encontrarás noticias, reseñas, recomendaciones y discusiones sobre anime y videojuegos, además de eventos y actividades para la comunidad.</p> </details> </div> <div class="faq-item mb-4 p-4 bg-gray-700 rounded-lg max-w-xl mx-auto"> <details> <summary class="text-xl font-semibold text-blue-400 hover:underline">¿Hay eventos o torneos en OtakuPlayhub?</summary> <p>Sí, organizamos eventos temáticos, concursos de anime, torneos de videojuegos y más actividades para la comunidad.</p> </details> </div> <div class="faq-item mb-4 p-4 bg-gray-700 rounded-lg max-w-xl mx-auto"> <details> <summary class="text-xl font-semibold text-blue-400 hover:underline">¿Puedo hacer amigos en OtakuPlayhub?</summary> <p>¡Sí! OtakuPlayhub está diseñado para que los fans del anime y los videojuegos se conecten, compartan sus intereses y hagan nuevas amistades.</p> </details> </div> <div class="faq-item mb-4 p-4 bg-gray-700 rounded-lg max-w-xl mx-auto"> <details> <summary class="text-xl font-semibold text-blue-400 hover:underline">¿Hay un servidor de Discord para la comunidad?</summary> <p>Sí, contamos con un servidor de Discord donde puedes chatear en tiempo real con otros miembros de la comunidad.</p> </details> </div> </section> <section id="comentarios"> <section class="text-center py-10"> <h1 class="text-4xl font-bold">Comentarios</h1> </section> <div id="disqus_thread"></div> ${renderScript($$result2, "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Faq.astro?astro&type=script&index=0&lang.ts")} <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> </section> ` })}`;
}, "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Faq.astro", void 0);

const $$file = "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Faq.astro";
const $$url = "/Faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Faq,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
