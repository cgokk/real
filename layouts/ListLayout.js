import { useState } from 'react'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Pagination from '@/components/Pagination'
import Image from '@/components/Image'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-4 md:pt-6 pb-6 md:pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold leading-8 md:leading-10 tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h1>
          <div className="relative h-12 items-center">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="무슨 공부를 했을까"
              className="text-sm md:text-lg block w-full leading-8 px-3 md:px-4 md:py-3 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 border border-white dark:border-gray-900 rounded-md focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
        </div>
        <ul>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          {!filteredBlogPosts.length && <li className="text-lg pt-8">🧐 검색 결과가 없습니다.</li>}
          {displayPosts.map((frontMatter) => {
            const { slug, thumbSrc, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-6 md:py-8">
                <Link href={`/blog/${slug}`}>
                  <article className="space-y-2 grid md:grid-cols-3 xl:grid-cols-4">
                    <div className="rounded-md overflow-hidden">
                      <Image
                        className="object-cover object-center transform scale-100 transition-all duration-300 ease-in-out hover:scale-110"
                        src={thumbSrc}
                        alt={thumbSrc}
                        blurDataURL={thumbSrc}
                        width="100%"
                        height="55%"
                        placeholder="blur"
                        loading="lazy"
                        layout="responsive"
                      />
                    </div>
                    <div className="space-y-3 xl:col-span-3 md:ml-5">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                          {title}
                        </h3>
                        <div className="flex flex-wrap md:pt-2">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose text-gray-500 max-w-none dark:text-gray-400 truncate">
                        {summary}
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
