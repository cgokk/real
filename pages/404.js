import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col h-70v items-center justify-center md:flex-row md:space-x-6">
      <div className="pt-6 pb-8 space-x-2">
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl md:leading-14 md:border-r-2 md:px-6">
          😢 404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          해당 페이지를 찾을 수 없습니다.
        </p>
        <p className="mb-8">이 페이지는 존재하지 않지만, 홈으로 돌아가 다른 글도 확인 해보세요!</p>
        <Link href="/">
          <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-blue-700 dark:hover:bg-blue-500">
            돌아가기
          </button>
        </Link>
      </div>
    </div>
  )
}
