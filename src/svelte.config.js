import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
  kit: {
    adapter: adapter({
      pages: 'docs', // Aquí le dices que la carpeta de salida es 'docs'
      assets: 'docs',
      fallback: 'index.html',
    }),
    paths: {
      base: dev ? '' : '/https://github.com/anime1234rr/Otakuplayhub-main-main', 
    },
    appDir: 'internal',
  }
};
