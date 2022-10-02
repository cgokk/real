import Link from './Link'

const Day = ({ title, description, href, date }) => (
  <div className="pb-3 md:pb-6">
    <h2 className="text-2xl font-medium mb-2 leading-8 tracking-tight text-gray-700 dark:text-gray-300">
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
  </div>
)

export default Day
