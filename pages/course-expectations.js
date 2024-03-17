import React from 'react'
import Head from 'next/head'
import _ from 'lodash'
//api
import { getPageContent, getMainFields } from 'api/collections'
//lib
import { setHeaderColor } from 'lib/theme-functions'
import { sectionsComponent, formatComponentName } from 'lib/component-name'
//components
import * as ComponentSection from 'components/sections'

class CourseExpectations extends React.Component {
  constructor(props) {
    super(props);
  }
  
  state = {  }

  render() { 
    const { url } = this.props.mainFields
    const { sectionItems, fields } = this.props.pageContent
    const activeSections = _.filter(sectionItems, data => _.get(data, 'fields.active') === '1')

    // const hostname = typeof window !== 'undefined' && window.location.href ? window.location.href : '';
    const metaTitle = _.get(fields, 'metaTitle') ? _.get(fields, 'metaTitle') : _.get(this.props.mainFields, 'defaultMetaTitle')

    return (
      <div>
        <Head>
          <title>Course Expectations - {metaTitle}</title>
          <link rel="canonical" href={`${url}course-expectations`}/>
          <meta name="title" content={`Course Expectations - ${metaTitle}`} />
          <meta name="description" content={`${_.get(fields, 'metaDescription')}`}/>
          <meta property="og:title" content={`Course Expectations - ${metaTitle}`} key="title" />
          <meta property="og:description" content={`${_.get(fields, 'metaDescription')}`} key="description" />
          <meta property="og:image" content="https://fluxconsole.com/files/image/223145" key="image" />
        </Head>

        {
          _.size(activeSections) > 0 && (
            activeSections.map((item, index) => {
              const componentName = sectionsComponent(item)

              if (componentName) {
                const ComponentType = ComponentSection[formatComponentName(componentName)] ? ComponentSection[formatComponentName(componentName)] : null
                const marginTop = index === 0 ? 'mt-20': ''
                const nextSectionBgColor = _.get(activeSections[++index], 'fields.backgroundColorClass') || 'white'

                if (ComponentType) {
                  return <ComponentType data={item} key={item.name} marginTop={marginTop} nextSectionBgColor={nextSectionBgColor}/>
                }
              }
            })
          )
        }
      </div>
    );
  }
}
 
export default CourseExpectations;

export async function getStaticProps(context) { 
  const { items } = await getPageContent('160169')
  const mainFields = await getMainFields()
  const pageContent = _.first(items)
  const firstSection = _.find(pageContent.sectionItems, data => data.fields.active)
  const headerColor = setHeaderColor(_.get(firstSection, 'fields.backgroundColorClass') ? _.get(firstSection, 'fields.backgroundColorClass') : 'white')

  return {
    props: {
      pageContent,
      headerColor,
      mainFields,
      removeContactUs: false
    },
  };
}