import React from "react";
import _ from 'lodash'
//lib
import { setSectionColor } from 'lib/theme-functions'
//components
import { Title, Body, Button, VideoHolder, ImageHolder } from 'components/section-components'

class ImageLeft extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    const { fields } = this.props.data
    const sectionTheme = setSectionColor(fields.backgroundColorClass)
    const titleStyle = 'text-2xl md:text-3xl  font-heading text-section-title font-black'
    const subTitleStyle = 'mt-3 text-lg md:text-xl font-semibold text-section-subtitle'

    return (
      <section className={`relative w-full bg-${fields.backgroundColorClass} overflow-hidden ${sectionTheme}`}>
        <div className={`max-w-screen-2xl container relative pb-14 z-20 pt-8 md:pt-12 lg:pt-16 lg:pb-28 xl:pt-20 2xl:pt-24 2xl:px-24 ${fields.containerWidth} ${this.props.marginTop}`}>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative w-full max-w-2xl lg:max-w-none">
            {/* image */}
            {
                _.get(fields, 'video') && (
                  <VideoHolder video={_.get(fields, 'video.videoUrl')} imageWidth="320" styles="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg"/>
                )
              }
              
              {
                !_.get(fields, 'video') && _.get(fields, 'image') && (
                  <ImageHolder image={fields.image} imageWidth="320" styles="aspect-w-16 aspect-h-11 overflow-hidden rounded-lg"/>
                )
              }
            </div>
            <div className="relative">
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
                  styles: `mt-6 prose prose-lg md:prose-xl text-section-body`
                }}
              />

              {/* extra body */}
              <Body
                data={{
                  body: fields.extraBody,
                  bodySize: fields.extraBodySize,
                  styles: `mt-6 prose prose-lg md:prose-xl text-section-body`
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
                            styles: 'button grid sm:inline-flex bg-section-button-primary text-section-button-primary hover:bg-section-button-primary-hover'
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
                            styles: 'button grid sm:inline-flex border-section-button-secondary text-section-button-secondary hover:border-section-button-secondary-hover hover:text-section-button-secondary-hover'
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
 
export default ImageLeft;