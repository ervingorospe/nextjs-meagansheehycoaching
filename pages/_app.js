import '../styles/globals.scss'
import Script from 'next/script'
import PageLayout from 'layouts/page-layout'
import _ from 'lodash'

function MyApp({ Component, pageProps }) {

  return (
    <PageLayout 
      headerColor={pageProps.headerColor}
      pageContent={pageProps.pageContent}
      removeContactUs={pageProps.removeContactUs}
    >
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${_.get(pageProps.mainFields, 'analyticsId')}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${_.get(pageProps.mainFields, 'analyticsId')}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default MyApp


/**
 primary-500 
 bg-default
 bg-transparent
 bg-primary-100
 bg-primary-200
 bg-primary-300
 bg-primary-400
 bg-primary-500
 bg-primary-600
 bg-primary-700
 bg-primary-800
 bg-primary-900
 bg-secondary-500
 bg-white
 bg-gray-50
 bg-gray-100
 bg-gray-200
 bg-gray-300
 bg-gray-400
 bg-gray-500
 bg-gray-600
 bg-gray-700
 bg-gray-800
 bg-gray-900
 bg-black

 border-default
 border-transparent
 border-primary-100
 border-primary-200
 border-primary-300
 border-primary-400
 border-primary-500
 border-primary-600
 border-primary-700
 border-primary-800
 border-primary-900
 border-secondary-500
 border-white
 border-gray-50
 border-gray-100
 border-gray-200
 border-gray-300
 border-gray-400
 border-gray-500
 border-gray-600
 border-gray-700
 border-gray-800
 border-gray-900
 border-black
 
 from-default
 from-transparent
 from-primary-100
 from-primary-200
 from-primary-300
 from-primary-400
 from-primary-500
 from-primary-600
 from-primary-700
 from-primary-800
 from-primary-900
 from-secondary-500
 from-white
 from-gray-50
 from-gray-100
 from-gray-200
 from-gray-300
 from-gray-400
 from-gray-500
 from-gray-600
 from-gray-700
 from-gray-800
 from-gray-900
 from-black

 text-default
 text-transparent
 text-primary-100
 text-primary-200
 text-primary-300
 text-primary-400
 text-primary-500
 text-primary-600
 text-primary-700
 text-primary-800
 text-primary-900
 text-secondary-500
 text-white
 text-gray-50
 text-gray-100
 text-gray-200
 text-gray-300
 text-gray-400
 text-gray-500
 text-gray-600
 text-gray-700
 text-gray-800
 text-gray-900
 text-black

 light-navigation-theme
 dark-navigation-theme
 scroll-navigation-theme
 light-section-theme
 dark-section-theme
 prose-primary
 prose-primary-invert
 */