import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="text-sm mt-2 mr-3 py-1 px-2 rounded border border-blue-600 font-medium uppercase text-blue-600 transition duration-500 ease-in-out hover:bg-blue-600 hover:text-gray-100 dark:hover:text-gray-900">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
