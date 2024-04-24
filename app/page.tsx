import { CoreContent } from '@shipixen/pliny/utils/contentlayer';
import type { Blog } from 'shipixen-contentlayer/generated';
import PostHubLayout from '@/layouts/PostHub';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <PostHubLayout
        content={
          {
            date: '2023-09-01',
            lastmod: '2023-09-01',
            title: 'Welcome to the docs site!',
            tags: ['docs'],
            toc: [],
          } as CoreContent<Blog>
        }
        authorDetails={[]}
        className="py-4"
      >
        <p>
          This is the home page. You can edit this page in{' '}
          <code>app/home.tsx</code>.
        </p>
      </PostHubLayout>
    </div>
  );
}
