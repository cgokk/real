import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

const DEFAULT_LAYOUT = 'AuthorLayout'

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-4 md:pt-6 pb-4 md:pb-8 space-y-3 md:space-y-5">
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <h1 className="text-2xl md:text-4xl font-bold leading-8 md:leading-10 tracking-tight text-gray-900 dark:text-gray-100">
            걸어다니는 스타트업 강차곡
          </h1>
        </div>
        <img src="./static/images/avatar.png"></img>
      </div>
    </>
  )
}
