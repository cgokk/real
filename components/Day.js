import Link from './Link'

const Day = ({ title, description, href, date }) => (
  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
    <li className="py-4 md:py-6">
      <h2 className="text-xl font-medium leading-10 tracking-tight text-gray-700 dark:text-gray-300">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="text-sm max-w-none text-gray-500 dark:text-gray-400">{date}</p>
      <p className="text-base py-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
    </li>
  </ul>
)

export default Day
