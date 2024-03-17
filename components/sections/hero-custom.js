/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import _ from 'lodash'
//lib
import { setSectionColor } from 'lib/theme-functions'
//components
import { Title, Body, Button, VideoHolder, ImageHolder } from 'components/section-components'

class HeroCustom extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    const { fields } = this.props.data
    const sectionTheme = setSectionColor(fields.backgroundColorClass)
    const titleStyle = 'font-heading text-4xl font-black text-section-hero-title md:text-5xl lg:text-6xl'
    const subTitleStyle = 'font-heading text-xl font-black text-section-hero-subtitle md:text-2xl lg:text-3xl'
    const nextSectionBgColor= this.props.nextSectionBgColor ? `text-${this.props.nextSectionBgColor}` : 'text-footer'

    return (
      <section className={`relative overflow-hidden bg-${fields.backgroundColorClass} light-section-theme ${sectionTheme}`}>
        <div className="absolute bg-fixed pattern-primary absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-200"></div>
        
        <div className={`container relative z-1 max-w-screen-2xl py-12 md:py-20 lg:py-24 xl:py-28 2xl:py-32 ${this.props.marginTop}`}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center">
            <div>
              {/* title */}
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
                  styles: `${fields.titlesInverted !== 'inverted' ? subTitleStyle : titleStyle} mt-4`
                }}
              />

              {/* body */}
              <Body
                  data={{
                    body: fields.body,
                    bodySize: fields.bodySize,
                    styles: 'prose prose-lg prose-primary mt-6 md:prose-xl text-section-hero-body'
                  }}
                />

              {/* extra body */}
              <Body
                data={{
                  body: fields.extraBody,
                  bodySize: fields.extraBodySize,
                  styles: 'prose prose-lg prose-primary mt-6 md:prose-xl text-section-hero-body'
                }}
              />

              {/* section buttons */}
              {
                (_.get(fields, 'button') || _.get(fields, 'button-2')) && (
                  <div className="mt-6 space-y-2 sm:space-x-2 md:space-y-0">
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
                            styles: 'button-animation button grid inline-flex border-section-button-hero-primary text-section-button-hero-primary sm:inline-flex hover:border-section-button-hero-primary-hover hover:text-section-button-hero-primary-hover'
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
                            styles: 'button grid border-section-hero-secondary bg-section-button-hero-secondary text-section-button-hero-secondary hover:border-section-hero-secondary-hover hover:bg-section-button-hero-secondary-hover sm:inline-flex'
                          }}
                        />
                      )
                    }
                  </div>
                )
              }
            </div>
            <div>
              {
                _.get(fields, 'video') && (
                  <VideoHolder video={_.get(fields, 'video.videoUrl')} styles="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg"/>
                )
              }
              
              {
                !_.get(fields, 'video') && _.get(fields, 'image') && (
                  <ImageHolder image={fields.image} styles="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg"/>
                )
              }
            </div>
          </div>
        </div>
        <svg className={`relative ${nextSectionBgColor}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1338 48.14">
          <g id="Logos"><path className="cls-1" d="M669,0C447.58,0,244.44,69.62,0,5.93V48.14H1338V5.93C1093.56,69.62,890.42,0,669,0Z"></path></g>
        </svg>
      </section>
    );
  }
}
 
export default HeroCustom;