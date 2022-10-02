import siteMetadata from '@/data/siteMetadata'
import dayData from '@/data/dayData'
import Day from '@/components/Day'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-4 md:pt-6 pb-4 md:pb-8 space-y-2 md:space-y-5">
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <h1 className="text-2xl md:text-4xl font-bold leading-8 md:leading-10 tracking-tight text-gray-900 dark:text-gray-100">
            디자인 이즈 마이 라이프
          </h1>
        </div>
        <div className="py-6 md:py-8">
          {dayData.map((d) => (
            <Day
              key={d.title}
              title={d.title}
              date={d.date}
              description={d.description}
              href={d.href}
            />
          ))}
        </div>
      </div>
    </>
  )
}
