import React from "react";
import _ from 'lodash'
//lib
import { setSectionColor, setProseColor } from 'lib/theme-functions'
//components
import { Title, Body, Button } from 'components/section-components'

class DefaultCentered extends React.Component {
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
      <section className={`relative w-full overflow-hidden ${sectionTheme}`}>
         <div className="w-full h-full overflow-hidden relative">
          <div className={`max-w-screen-2xl container relative pb-14 z-20 pt-8 md:pt-12 lg:pt-16 lg:pb-28 xl:pt-20 2xl:pt-24 2xl:px-24 ${fields.containerWidth} ${this.props.marginTop}`}>
            <div className="grid justify-center w-full text-center pb-20">
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
                  <div className="space-y-2 md:space-y-0 sm:space-x-2 mt-6">
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
                            styles: 'button grid sm:inline-flex bg-section-button-primary text-section-button-primary hover:bg-section-button-primary-hover'
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
 
export default DefaultCentered;