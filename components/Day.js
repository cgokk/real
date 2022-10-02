import Link from './Link'

const Card = ({ title, description, href, date }) => (
  <div className="pb-4">
    <h2 className="mb-2 text-2xl font-bold leading-8 tracking-tight">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          {title}
        </Link>
      ) : (
        title
      )}
    </h2>
    <p className="prose max-w-none text-gray-500 dark:text-gray-400">{date}</p>
    <p className="prose mb-2 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
  </div>
)

export default Card
