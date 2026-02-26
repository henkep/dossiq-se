import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const inlagg = await getCollection('blogg', ({ data }) => !data.draft);
  return rss({
    title: 'Dossiq Blogg',
    description: 'Praktiska guider om dokumentorganisation for svenska hushall.',
    site: context.site!,
    items: inlagg.map(post => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blogg/${post.id.replace(/\.md$/, '')}/`,
    })),
  });
}
