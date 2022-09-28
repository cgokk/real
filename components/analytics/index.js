import siteMetadata from '@/data/siteMetadata'
import GA from './GoogleAnalytics'

const Analytics = () => {
  return <>{siteMetadata.analytics.googleAnalyticsId && <GA />}</>
}

export default Analytics
