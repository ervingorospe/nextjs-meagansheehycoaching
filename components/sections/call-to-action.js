import React from 'react'
//lib
import { setSectionColor, setProseColor } from 'lib/theme-functions'
//components
import { Title, Body, Button } from 'components/section-components'

class CalltoAction extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  render() { 
    const { fields } = this.props.data
    const sectionTheme = setSectionColor(fields.backgroundColorClass)
    const titleStyle = 'text-3xl md:text-4xl font-heading font-medium mt-1 text-section-cta-title'
    const subTitleStyle = 'mt-1 text-lg uppercase tracking-wide font-semibold text-section-cta-subtitle'

    return (
      <section className={`absolute -top-64 max-w-screen-md text-center py-0 container relative z-1 ${sectionTheme}`}>
        <div className={`p-4 border rounded-xl border-${fields.backgroundColorClass}`}>
          <div className={`bg-${fields.backgroundColorClass} rounded-xl shadow-lg p-6 md:p-8 lg:p-12`}>
            <Title 
              data={{
                title: fields.title,
                titleSize: fields.titleSize,
                titleTag: fields.titleTag,
                styles: fields.titlesInverted !== 'inverted' ? titleStyle : subTitleStyle
              }}
            />

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
                styles: `mt-6 text-section-cta-body prose xl:prose-lg bg-transparent sm:bg-transparent md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent`
              }}
            />

            {/* extra body */}
            <Body
              data={{
                body: fields.extraBody,
                bodySize: fields.extraBodySize,
                styles: `mt-2 text-section-cta-body prose xl:prose-lg bg-transparent sm:bg-transparent md:bg-transparent lg:bg-transparent xl:bg-transparent 2xl:bg-transparent`
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
      </section>
    );
  }
}
 
export default CalltoAction;