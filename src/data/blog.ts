import { VICIdialTrapPost } from '@/sections/blog/posts/VICIdialTrapPost';
import type { ComponentType } from 'react';
import {
  blogPosts as blogMeta,
  type BlogPostMeta as BlogPostMetaBase,
} from './blogMeta';

export type BlogPostMeta = BlogPostMetaBase & {
  component: ComponentType;
};

const componentMap: Record<string, ComponentType> = {
  'vicidial-trap': VICIdialTrapPost,
};

export const blogPosts: BlogPostMeta[] = blogMeta.map((post) => {
  const component = componentMap[post.slug];
  if (!component) {
    throw new Error(`No component found for blog post slug: ${post.slug}`);
  }
  return { ...post, component };
});

export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function formatBlogDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
