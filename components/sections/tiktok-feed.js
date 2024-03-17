/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Script from 'next/script'
import _ from 'lodash'
//lib
import { setSectionColor } from 'lib/theme-functions'
import { getTiktokSrc } from 'lib/embed-codes'
//components
import { Title, Body, Button } from 'components/section-components'

class TiktokFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    const { fields } = this.props.data
    const sectionTheme = setSectionColor(fields.backgroundColorClass)
    const titleStyle = 'text-3xl md:text-4xl font-heading font-bold mt-1 text-section-title'
    const subTitleStyle = 'mt-1 text-lg uppercase tracking-wide font-semibold text-section-subtitle'
    const embedCode = getTiktokSrc(fields.embed)
    
    return (
      <section className={`relative overflow-hidden bg-${fields.backgroundColorClass} light-section-theme ${sectionTheme}`}>
        <div className={`max-w-screen-2xl py-8 mb-10 lg:py-16 container relative z-1  ${fields.containerWidth} ${this.props.marginTop}`}>
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
                  styles: `mt-6 prose xl:prose-lg bg-transparent sm:bg-transparent md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent`
                }}
              />

              {/* extra body */}
              <Body
                data={{
                  body: fields.extraBody,
                  bodySize: fields.extraBodySize,
                  styles: `mt-2 prose xl:prose-lg bg-transparent sm:bg-transparent md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent`
                }}
              />

              {/* section buttons */}
              {
                (_.get(fields, 'button') || _.get(fields, 'button-2')) && (
                  <div class="mt-1 space-y-2 sm:space-x-2 md:space-y-0">
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
                            styles: 'text-lg uppercase tracking-wide font-semibold text-section-subtitle hover:text-primary-800'
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
            <div className="py-10">
              <Script src={embedCode.scriptCode}></Script>
              <div className={embedCode.divCode} data-elfsight-app-lazy></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
 
export default TiktokFeed;