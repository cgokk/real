import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mt-2 mr-3 font-medium uppercase text-blue-600 hover:text-gray-500 dark:hover:text-gray-400">
        #{text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
