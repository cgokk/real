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
        <div>
          <div className="pt-4 md:pt-6 pb-4 md:pb-8 space-y-3 md:space-y-5">
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <h1 className="text-2xl md:text-4xl font-bold leading-8 md:leading-10 tracking-tight text-gray-900 dark:text-gray-100">
              걸어다니는 스타트업 강차곡
            </h1>
          </div>
          <div className="flex md:flex-row flex-col pb-4 md:pb-8">
            <div className="flex items-start">
              <img className="w-[150px] md:w-[190px]" src="./static/images/avatar.png"></img>
            </div>
            <div className="flex flex-col md:self-end md:pl-8 pt-3 max-w-none xl:col-span-2">
              <div className="font-bold pb-1 md:pb-3 text-2xl md:text-3xl text-gray-900 dark:text-white">
                강차곡
              </div>
              <div className="font-semibold md:pb-1 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                다재다능한 마케터
              </div>
              <div className="font-medium pt-1 text-base md:text-lg md:leading-relaxed text-gray-500 dark:text-gray-400">
                Email. ridalswl@gmail.com<br></br>
                Phone. 010-7586-9399<br></br>
                Blog. https://wonny.space/<br></br>
                GitHub. https://github.com/wonny-log<br></br>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4 md:pb-8">
          <h1 className="text-2xl pt-4 md:pt-8 md:text-3xl font-bold leading-8 md:leading-10 tracking-tight text-gray-900 dark:text-gray-100">
            간단한 자기소개
          </h1>
          <p className="font-medium text-base py-3 md:py-4 md:text-xl tracking-tight text-gray-500 dark:text-gray-400">
            현재는 스타트업을 마케팅해주는 광고대행사에서 콘텐츠 마케터로 일하고 있으며<br></br>
            주로 마케팅 전략을 세우거나 콘텐츠와 상세페이지를 기획하고 있습니다.
          </p>
          <p className="font-medium text-base md:text-xl tracking-tight text-gray-500 dark:text-gray-400 list-disc">
            꿈과 욕심이 많아 다양한 분야를 공부하고 도전하고 있습니다.<br></br>
            하나만 잘 하는 사람보다는 다방면에서 뛰어난 사람이 되고 싶습니다.
          </p>
        </div>
        <div>
          <h1 className="text-2xl pt-4 md:pt-6 md:text-3xl font-bold leading-8 md:leading-10 tracking-tight text-gray-900 dark:text-gray-100">
            사용 가능한 툴
          </h1>
          <div className="xl:grid grid-cols-2 gap-6 py-3 md:py-4">
            <div className="flex rounded-md bg-gray-100 dark:bg-gray-800 mb-4 xl:mb-0">
              <div className="p-5 md:p-5">
                <div className="h-12 w-12 md:h-14 md:w-14">
                  <img src="./static/images/ps.png"></img>
                </div>
              </div>
              <div className="py-5 pr-5 overflow-hidden">
                <h3 className="font-bold mb-1 text-lg md:text-2xl text-gray-800 dark:text-gray-200">
                  포토샵
                </h3>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-400">
                  제일 좋아하는 툴이고 가장 자주 사용합니다.<br></br>
                  많은 기능들을 능숙하게 사용할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
