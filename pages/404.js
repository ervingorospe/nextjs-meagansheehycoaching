/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'
import _ from 'lodash'
import Link from 'next/link'
//api
import { getMainFields } from 'api/collections'

class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    const { url, defaultMetaTitle } = this.props.mainFields
    // const hostname = typeof window !== 'undefined' && window.location.href ? window.location.href : '';
    const metaDescription = "Schedule your initial consultation for a holistic lifestyle and mindset coaching session. We offer in-person and video-telehealth sessions. Email or call us today!"
    const message = "We're sorry, this page does not exist but you can"

    return (
      <section className={`relative w-full overflow-hidden light-section-theme`}>
        <Head>
          <title>404 Page Not Found - {defaultMetaTitle}</title>
          <link rel="canonical" href={`${url}404`}/>
          <meta name="title" content={`404 Page Not Found - ${defaultMetaTitle}`} />
          <meta name="description" content={`${metaDescription}`}/>
          <meta property="og:title" content={`404 Page Not Found - ${defaultMetaTitle}`} key="title" />
          <meta property="og:description" content={`${metaDescription}`} key="description" />
          <meta property="og:image" content="https://fluxconsole.com/files/image/223148" key="image" />
        </Head>

        <div className="w-full h-full overflow-hidden relative">
          <div className={`py-8 md:pt-12 md:pb-16 lg:pt-16 lg:pb-16 xl:pt-20 2xl:pt-24 container relative z-1 2xl:px-24 mt-20 mb-20`}>
            <div className="mx-auto max-w-prose xl:text-lg text-center">
              <h2 className="mt-0 text-4xl md:text-5xl font-heading font-bold">Wait a second...</h2>
              <div className="mt-6 text-base text-primary-700 lg:text-lg">
                {message} <Link href="/"><a className="font-bold text-primary-700 hover:underline">explore the rest of our site.</a></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
 
export default PageNotFound;

export async function getStaticProps(context) {
  const mainFields = await getMainFields()

  return {
    props: {
      mainFields,
      headerColor: 'light-navigation-theme',
      removeContactUs: false
    },
  };
}