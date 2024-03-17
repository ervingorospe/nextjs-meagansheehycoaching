import React from 'react'
import _ from 'lodash'
//lib
import { setSectionColor, setProseColor } from 'lib/theme-functions'
//components
import { Title, Body, Button, VideoHolder, ImageHolder } from 'components/section-components'

class ImageRightBigImage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    const { fields } = this.props.data
    const sectionTheme = setSectionColor(fields.backgroundColorClass)
    const titleStyle = 'text-3xl md:text-4xl font-heading font-bold mt-1 text-section-title'
    const subTitleStyle = 'mt-1 text-lg uppercase tracking-wide font-semibold text-section-subtitle'

    return (
      <section className={`relative w-full overflow-hidden ${sectionTheme} bg-${fields.backgroundColorClass}`}>
        <div className={`max-w-screen-xl py-8 lg:py-16 container relative z-1 ${fields.containerWidth} ${this.props.marginTop}`}>
          <div className="grid justify-center items-center gap-10 xl:gap-x-12 lg:grid-cols-2">
            {/* right image */}
            <div className="relative w-full max-w-xl mx-auto">
              {
                _.get(fields, 'video') && (
                  <VideoHolder video={_.get(fields, 'video.videoUrl')} styles="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg"/>
                )
              }
              
              {
                !_.get(fields, 'video') && _.get(fields, 'image') && (
                  <ImageHolder image={fields.image} styles="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg"/>
                )
              }
            </div>
            <div className="relative lg:row-start-1 lg:col-start-1">
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
                  styles: `mt-6 text-section-body prose xl:prose-lg`
                }}
              />

              {/* extra body */}
              <Body
                data={{
                  body: fields.extraBody,
                  bodySize: fields.extraBodySize,
                  styles: `mt-2 text-section-body prose xl:prose-lg`
                }}
              />

              {/* section buttons */}
              {
                (_.get(fields, 'button') || _.get(fields, 'button-2')) && (
                  <div className="space-y-2 md:space-y-0 sm:space-x-2 mt-10">
                    {/* button 1*/}
                    {
                      _.get(fields, 'button') && (
                        <Button
                          data={{
                            fields: {
                              button: {...fields.button},
                              buttonPageLink: fields.buttonPageLink,
                            },
                            buttonSize: fields.buttonSize,
                            buttonStyle: fields.buttonStyle,
                            name: fields.button.text,
                            styles: 'button grid sm:inline-flex border-section-button-primary'
                          }}
                        />
                      )
                    }
                    
                    {/* button 2*/}
                    {
                      _.get(fields, 'button-2') && (
                        <Button
                          data={{
                            fields: {
                              button: {..._.get(fields, 'button-2')},
                              buttonPageLink: _.get(fields, 'buttonPageLink-2'),
                            },
                            buttonSize: fields.buttonSize,
                            buttonStyle: _.get(fields, 'buttonStyle-2'),
                            name: _.get(fields, 'button-2.text'),
                            styles: 'button-animation button grid inline-flex border-section-button-hero-primary text-section-button-hero-primary sm:inline-flex hover:border-section-button-hero-primary-hover hover:text-section-button-hero-primary-hover'
                          }}
                        />
                      )
                    }
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
 
export default ImageRightBigImage;