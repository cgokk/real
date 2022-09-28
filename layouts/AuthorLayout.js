import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            👋 About
          </h1>
        </div>
        <div className="items-start">
          <div className="flex flex-col items-center pt-14 space-x-3">
            <Image
              src={avatar}
              blurDataURL={avatar}
              placeholder="blur"
              loading="lazy"
              alt="avatar"
              width="120px"
              height="120px"
              className="w-48 h-48"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${email}`} size={5} />
              <SocialIcon kind="github" href={github} size={5} />
              <SocialIcon kind="linkedin" href={linkedin} size={5} />
            </div>
            <div className="pt-14 prose dark:prose-dark max-w-5 justify-center">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
