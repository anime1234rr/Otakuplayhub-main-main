globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BX7g35ed.mjs';
import { manifest } from './manifest_BkOFbs7s.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/500.astro.mjs');
const _page2 = () => import('./pages/anime.astro.mjs');
const _page3 = () => import('./pages/cambio.astro.mjs');
const _page4 = () => import('./pages/eventos.astro.mjs');
const _page5 = () => import('./pages/faq.astro.mjs');
const _page6 = () => import('./pages/foro.astro.mjs');
const _page7 = () => import('./pages/juegos.astro.mjs');
const _page8 = () => import('./pages/musica.astro.mjs');
const _page9 = () => import('./pages/noticias.astro.mjs');
const _page10 = () => import('./pages/política de privacidad.astro.mjs');
const _page11 = () => import('./pages/posts/_post_.astro.mjs');
const _page12 = () => import('./pages/rss.xml.astro.mjs');
const _page13 = () => import('./pages/sobre nosotros.astro.mjs');
const _page14 = () => import('./pages/términos y condiciones.astro.mjs');
const _page15 = () => import('./pages/worker.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/500.astro", _page1],
    ["src/pages/Anime.astro", _page2],
    ["src/pages/cambio.astro", _page3],
    ["src/pages/Eventos.astro", _page4],
    ["src/pages/Faq.astro", _page5],
    ["src/pages/Foro.astro", _page6],
    ["src/pages/Juegos.astro", _page7],
    ["src/pages/Musica.astro", _page8],
    ["src/pages/Noticias.astro", _page9],
    ["src/pages/Política de privacidad.astro", _page10],
    ["src/pages/posts/[post].astro", _page11],
    ["src/pages/rss.xml.js", _page12],
    ["src/pages/Sobre nosotros.astro", _page13],
    ["src/pages/Términos y Condiciones.astro", _page14],
    ["src/pages/worker.js", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
