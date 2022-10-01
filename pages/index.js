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
      <div>
        <div className="pt-4 md:pt-6 pb-4 md:pb-8 space-y-3 md:space-y-5">
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <h1 className="text-2xl md:text-4xl font-bold leading-8 md:leading-10 tracking-tight text-gray-900 dark:text-gray-100">
            걸어다니는 스타트업 강차곡
          </h1>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="flex items-start">
            <img className="w-[150px] sm:w-[190px]" src="./static/images/avatar.png"></img>
          </div>
          <div className="flex flex-col md:self-end md:pl-8 sm:pt-2 max-w-none xl:col-span-2">
            <div className="font-bold pb-1 md:pb-3 text-2xl md:text-3xl tracking-tight text-gray-900 dark:text-white">
              강차곡
            </div>
            <div className="font-semibold pb-2 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              다재다능한 마케터
            </div>
            <div className="font-medium text-base md:text-xl md:leading-relaxed text-gray-500 dark:text-gray-400">
              Email. ridalswl@gmail.com<br></br>
              Phone. 010-7586-9399<br></br>
              Blog. https://wonny.space/<br></br>
              GitHub. https://github.com/wonny-log<br></br>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
