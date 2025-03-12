import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://emer1519.netlify.app',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'EmeR_1519',
      openGraph: {
        home: {
          title: '3meR\'s Blog',
          description: 'A blog about gaming and security (I hope so.)'
        },
        blog: {
          title: 'Blog',
          description: 'articles'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: 'DoraYeh1519/AstroBlog',
        repositoryId: 'R_kgDOOHO0Eg',
        category: 'General',
        categoryId: 'DIC_kwDOOHO0Es4Cn54K',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'zh-TW',
      }
    })
  ],
  adapter: netlify()
});