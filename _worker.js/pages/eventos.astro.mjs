globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_a_wdovWq.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cie12lse.mjs';
export { renderers } from '../renderers.mjs';

const $$Eventos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Eventos - OtakuPlayhub" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-center py-10"> <h1 class="text-4xl font-bold">Eventos</h1> <p class="mt-4 text-lg">¡Eventos de la comunidad!</p> </section> <section class="container mx-auto px-4"> <h2 class="text-2xl font-semibold">¡Bienvenido a los Eventos de la comunidad de OtakuPlayhub!</h2> <p class="mt-4 text-lg">Aquí encontrarás todos los eventos que estamos organizando. ¡Asegúrate de participar y disfrutar con otros miembros de la comunidad!</p> <!-- esto no es real--> <div class="mt-8 bg-gray-700 p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold text-white">🎬 Maratón de Anime</h3> <p class="text-gray-300 mt-2">Únete a nuestro maratón de anime donde veremos juntos una selección de animes populares. ¡No olvides traer tus palomitas y comentar en vivo con otros fanáticos!</p> <p class="text-gray-300 mt-4">🗓 Fecha: 12 de Febrero, 2025 | 🕒 Hora: 7:00 PM (Hora del servidor)</p> </div> <div class="mt-8 bg-gray-700 p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold text-white">🎮 Torneo de Videojuegos</h3> <p class="text-gray-300 mt-2">¡Demuestra tus habilidades en nuestros torneos! Participa en competiciones amistosas de *Super Smash Bros.*, *Among Us*, y más.</p> <p class="text-gray-300 mt-4">🗓 Fecha: 14 de Febrero, 2025 | 🕒 Hora: 6:00 PM (Hora del servidor)</p> <p class="text-gray-300 mt-2">🏆 Premios para los ganadores y roles especiales en el servidor.</p> </div> <div class="mt-8 bg-gray-700 p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold text-white">❓ Trivia de Anime y Videojuegos</h3> <p class="text-gray-300 mt-2">Pon a prueba tus conocimientos sobre anime y videojuegos. ¡Vente a competir con otros miembros y gana premios increíbles!</p> <p class="text-gray-300 mt-4">🗓 Fecha: 16 de Febrero, 2025 | 🕒 Hora: 5:00 PM (Hora del servidor)</p> </div> <div class="mt-8 bg-gray-700 p-6 rounded-lg shadow-lg"> <p class="text-gray-300 mt-2">Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto conmigo.</p> </div> </section> ` })}`;
}, "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Eventos.astro", void 0);

const $$file = "C:/Users/Usuario/Downloads/Nueva carpeta (25)/Otakuplayhub-main-main/src/pages/Eventos.astro";
const $$url = "/Eventos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Eventos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
