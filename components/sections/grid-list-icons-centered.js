import React from 'react'
import _ from 'lodash'
//lib
import { setSectionColor, setProseColor } from 'lib/theme-functions'
//components
import { Title, Body, SessionFocusItems } from 'components/section-components'
// api
import { getCollection } from 'api/collections'

class GridListIconsCentered extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { 
    mounted: false,
    contentItems: []
  }

  componentDidMount = () => {
    this.mounted = true;  

    if (this.mounted && _.get(this.props, 'data.fields.contentCollection')) {
      getCollection(_.get(this.props, 'data.fields.contentCollection')).then(
        data => {
          const tempData = _.get(_.first(data.collections), 'items')

          this.setState({
            contentItems: _.filter(tempData, details => details.fields.active)
          })
        }
      )
    }
  }

  componentWillUnmount = () => {
    this.mounted = false;
  }

  render() { 
    const { fields } = this.props.data
    const sectionTheme = setSectionColor(fields.backgroundColorClass)
    const proseTheme = setProseColor(fields.backgroundColorClass)
    const titleStyle = 'text-3xl md:text-4xl font-heading font-bold mt-1 text-section-title'
    const subTitleStyle = 'mt-1 text-lg uppercase tracking-wide font-semibold text-section-subtitle'

    return (
      <section className={`relative w-full overflow-hidden ${sectionTheme}`}>
        <svg className={`relative text-${fields.backgroundColorClass}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 1338 76.29">
          <g id="Logos">
            <path className="cls-1" d="M669,56.88C267.55,56.88,0,0,0,0V76.29H1338V0s-267.55,56.88-669,56.88Z"/>
          </g>
        </svg>
        <div className={`w-full h-full overflow-hidden relative bg-${fields.backgroundColorClass}`}>
          <div className={`max-w-screen-xl py-8 lg:py-16 container relative z-1  ${fields.containerWidth} ${this.props.marginTop}`}>
            <div className="grid w-full">
              <div className="relative text-center">
                <Title 
                  data={{
                    title: fields.title,
                    titleSize: fields.titleSize,
                    titleTag: fields.titleTag,
                    styles: fields.titlesInverted !== 'inverted' ? titleStyle : subTitleStyle
                  }}
                />

                {/* subtitle */}
                <Title 
                  data={{
                    title: fields.subtitle,
                    titleSize: fields.subtitleSize,
                    titleTag: fields.subtitleTag,
                    styles: fields.titlesInverted !== 'inverted' ? subTitleStyle : titleStyle
                  }}
                />

                {/* body */}
                <Body
                  data={{
                    body: fields.body,
                    bodySize: fields.bodySize,
                    styles: `mt-6 prose xl:prose-lg bg-transparent sm:bg-transparent md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent ${proseTheme}`
                  }}
                />

                {/* extra body */}
                <Body
                  data={{
                    body: fields.extraBody,
                    bodySize: fields.extraBodySize,
                    styles: `mt-2 prose xl:prose-lg bg-transparent sm:bg-transparent md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent ${proseTheme}`
                  }}
                />
              </div>

              <div className={`w-full grid gap-x-6 gap-y-8 justify-center items-baseline md:grid-cols-${this.state.contentItems.length} lg:grid-cols-${this.state.contentItems.length} mt-12`}>
                {
                  this.state.contentItems.length > 0 && (
                    this.state.contentItems.map(item => (
                      <SessionFocusItems data={item} key={item.id}/>
                    ))
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <svg className={`relative rotate-180 text-${fields.backgroundColorClass}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 1338 76.29">
          <g id="Logos">
            <path className="cls-1" d="M669,56.88C267.55,56.88,0,0,0,0V76.29H1338V0s-267.55,56.88-669,56.88Z"/>
          </g>
        </svg>
      </section>
    );
  }
}
 
export default GridListIconsCentered;