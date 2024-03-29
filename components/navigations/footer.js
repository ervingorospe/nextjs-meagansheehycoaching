import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash'
//lib
import { sectionsComponent, formatComponentName } from 'lib/component-name'
import { itemLink } from 'lib/link-functions'
//components
import * as ComponentSection from 'components/sections'
import * as FooterSection from 'components/sections/footer-sections'
import { NavLink } from 'components/common'

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  
  render() { 
    const navigation = _.get(this.props.navigation, 'items')
    const activeSections = _.filter(this.props.actionSections, data => _.get(data, 'fields.active') === '1')
    const hasCallToAction = _.filter(this.props.actionSections, data => _.get(data, 'fields.active') === '1' && _.get(data, 'fields.type') === 'call-to-action').length > 0
    const locationInfo = _.filter(this.props.locationInfo, data => _.get(data, 'fields.active') === '1')
    

    return (
      <section className={`${hasCallToAction && !_.get(this.props.pageContent, 'hideCallToActionSections') ? 'mt-52 md:mt-44 lg:mt-36' : ''} relative w-full z-10`}>
        {
          (hasCallToAction && !_.get(this.props.pageContent, 'hideCallToActionSections')) && (
            <svg className="text-gray-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 1338 48.14">
              <g id="Logos">
                <path className="cls-1" d="M669,0C447.58,0,244.44,69.62,0,5.93V48.14H1338V5.93C1093.56,69.62,890.42,0,669,0Z"/>
              </g>
            </svg>
          )
        }
        
        {
         !_.get(this.props.pageContent, 'hideCallToActionSections') && (
            <div className="-mt-2 bg-gray-800 relative pt-10">
              {
                _.size(activeSections) > 0 && (
                  activeSections.map((item, index) => {
                    const componentName = sectionsComponent(item)

                    if (componentName) {
                      const ComponentType = ComponentSection[formatComponentName(componentName)] ? ComponentSection[formatComponentName(componentName)] : null
                      const marginTop = hasCallToAction ? '-mt-48' : ''

                      if (ComponentType) {
                        return <ComponentType data={item} key={item.name} marginTop={marginTop}/>
                      }
                    }
                  })
                )
              } 
            </div>
         )
        }
        
        <footer className="-mt-2 pt-20 bg-gray-800 dark-section-theme">
          <div className="container max-w-screen-xl overflow-hidden">
            <div className="pb-20 md:pb-12 space-y-10 md:pb-16 xl:pb-24">
              <div className="grid gap-16 lg:grid-cols-3 w-full">
                <div className="grid justify-items-center lg:justify-items-start order-2 lg:order-none">
                  <nav className={`dark-navigation-theme text-center lg:text-left`}>
                    {
                      _.size(navigation) > 0 && (
                        navigation.map(item => {
                          if (_.get(item, 'fields.showInNavigation'))
                            return (
                              <div className="py-2 lg:pt-1" key={item.name}>
                                <NavLink item={itemLink(item)} styles='text-base font-medium text-header-color hover:text-header-hover-color'/>
                              </div> 
                            )
                        })
                      )
                    }
                  </nav>
                </div>

                <div className="order-last lg:order-none">
                  <div className="max-w-sm mx-auto opacity-60 mt-4">
                    <figure className="relative h-100 w-100">
                      <div className="aspect-w-1 aspect-h-[1/4] overflow-hidden rounded-lg">
                        <svg className="text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 228.15 55.8">
                          <g id="Logos">
                            <g>
                              <g>
                                <path className="cls-1" d="M75.09,38.02c3.81,.28,9.06,1.4,14.26,3.03,2.41,.76,2.55,.76,3.1-1.62,.76-3.24,1.32-6.53,1.93-9.81,.09-.51-.23-.88-.8-.69-1.08,.37-2.11,1.04-3.28,1.13-1.19,.09-2.35-.78-2.54-2-.06-.37-.01-1.01-.52-.67-.5,.34-.91,.78-1.38,1.14s-1.04,.7-1.59,.98c-2.16,1.1-3.33,.9-5.2-.98-.58-.58-.99-.67-1.59-.24-.91,.65-1.81,1.34-2.79,1.87-1.06,.57-2.2,.69-3.14-.45-.63-.76-1.15-.61-1.8-.13-1.24,.93-2.48,1.87-3.82,2.65-1.58,.92-3.33,1.48-5.25,1.44-3.03-.07-4.76-2.01-4.75-5.01,.01-3.84,4.31-8.54,8.83-8.92,1.09-.09,2.17,.04,2.91,1.06,.8,1.09,.68,2.22,.13,3.28-1.27,2.42-3.38,3.6-6.09,3.85-.61,.06-1.24-.05-1.86-.07-1.19-.03-1.56,.22-1.72,1.11-.13,.77,.02,1.72,.76,2.21,1.06,.69,2.35,.53,3.43,.2,1.28-.39,2.56-.85,3.69-1.56,2.57-1.61,4.78-3.67,6.47-6.23,.57-.86,1.18-1.72,1.9-2.45,.59-.6,1.31-1.16,2.08-1.49,2.21-.96,4.17,.23,4.44,2.7,.08,.78,.04,1.55-.03,2.32-.07,.7-.27,1.45-.22,2.16,.06,.88,.92,1.42,1.72,1.27,2.03-.39,3.72-1.89,5.06-3.33,.9-.97,1.55-2.12,2.39-3.13,1.34-1.62,4.49-4.6,6.93-3.09,.95,.59,1.45,1.51,1.43,2.52,0,.16-.11,.76,.11,.83,.19,.06,.42-.31,.54-.41,.21-.18,.45-.37,.75-.4,.91-.07,1.38,1.03,.85,1.74-.05,.07-.11,.13-.17,.19-2.63,2.26-3.6,5.39-4.22,8.73-.57,3.11-1.24,6.19-1.89,9.28-.27,1.29-.23,1.55,1.1,1.96,2.84,.9,5.69,1.77,8.57,2.49,2.13,.53,4.25,.34,6.27-.38,.33-.12,.64-.27,.97-.37,.66-.21,1.47-.54,1.82,.39,.33,.88-.5,1.19-1.12,1.48-2,.95-4.17,1.39-6.42,1.05-2.29-.35-4.56-.96-6.83-1.48-.61-.14-1.2-.41-1.81-.58-1.2-.34-2.54-1.08-3.58-.83-.89,.21-1.45,1.57-2.13,2.44-1.67,2.13-3.72,3.83-6.11,5.11-5.41,2.91-11.25,4.07-17.58,3.22-2.33-.31-4.61-.95-6.64-2.23-1.29-.82-2.56-1.82-3.53-2.99-2.4-2.91-2.18-6.41,.37-8.87,1.46-1.41,3.28-2.21,5.25-2.72,3.51-.91,7.12-1.02,12.34-.69Zm-.31,1.96c-4-.29-7.17-.21-10.29,.39-1.82,.35-3.56,.92-5.01,2.06-2.58,2.03-2.68,4.83-.3,7.36,1.29,1.37,2.9,2.2,4.6,2.86,2.41,.92,4.89,1.17,7.37,1.16,5.26-.03,10.09-1.39,14.3-4.3,1.6-1.11,2.97-2.6,4.24-4.09,1.18-1.38,.96-1.82-.73-2.42-.08-.03-.17-.05-.26-.08-4.83-1.53-9.74-2.55-13.93-2.93Zm15.41-12.19c.45,.06,1.02-.06,1.3-.17,.4-.16,.78-.33,1.15-.54,.67-.38,1.27-.87,1.76-1.45,.66-.77,2.79-4.51,1.2-5.31-1.86-.94-4.49,2.79-5.14,4-.44,.81-.68,1.75-.87,2.67-.11,.53,.19,.75,.6,.81Zm-16.52,.38c.78,.44,2.43-1.02,2.85-1.36,.63-.51,1.2-1.09,1.7-1.73,.53-.66,.68-1.43,.71-2.3,.04-1.11-.86-1.71-1.78-1.21-1.05,.58-1.89,1.45-2.52,2.46-.44,.7-.85,1.44-1.1,2.24-.16,.5-.51,1.52,.15,1.88Zm-13.86-2.81c.1,.21,.29,.39,.49,.45,1.94,.59,4.83-.79,5.65-2.67,.34-.78-.12-1.49-.97-1.38-2.16,.27-3.89,1.31-5.15,3.03-.12,.17-.11,.38-.02,.58Z"/>
                                <path className="cls-1" d="M29.94,10.05c2.67,.17,5.34,.33,8,.5,2.53,.16,4.94,.04,7.01-1.56,1.02-.79,1.95-.23,1.89,1.09-.06,1.13-.31,2.26-.65,3.33-1.08,3.41-2.26,6.78-3.36,10.19-.2,.61-.42,1.21-.55,1.85-.13,.64-.22,2.27,.67,1.24,.55-.64,.86-1.49,1.27-2.23,2.5-4.56,4.92-9.16,7.5-13.66,1.77-3.08,3.89-5.93,6.4-8.44,.67-.67,1.4-1.29,2.17-1.83,.64-.45,1.4-.83,2.19-.17,.77,.65,.56,1.48,.34,2.23-.22,.75-.54,1.47-.87,2.18-1.95,4.26-3.98,8.49-5.85,12.79-1.98,4.54-3.76,9.17-4.61,14.16-.37,2.19-.47,4.38-.14,6.62,.06,.44,.2,.93,.08,1.32-.23,.78-1.07,.87-1.63,.26s-.55-2.33-.61-3.09c-.28-3.44,.39-6.7,1.3-9.92,1.48-5.23,3.65-10.17,5.89-15.06,.55-1.21,1.12-2.41,1.69-3.62,.31-.67,.84-1.38,1.02-2.15,.27-1.18-.16-1.5-1.12-.71-1.05,.86-1.7,2.11-2.41,3.24-2.63,4.79-5.71,9.29-8.2,14.18-1.1,2.16-2.22,4.32-3.39,6.44-.41,.75-.93,1.47-1.55,2.06-1.04,.98-2.25,.55-2.55-.94-.17-.85-.18-1.8,.01-2.63,.72-3.07,1.53-6.11,2.36-9.14,.23-.84,.65-1.62,.92-2.45,.14-.42,.37-.95,.34-1.42-.02-.43-.29-.95-.68-.51-.58,.64-1.14,1.3-1.63,2-3.78,5.47-7.54,10.96-11.32,16.43-2.45,3.55-4.92,7.1-7.41,10.62-.54,.77-1.21,1.46-1.9,2.11-.4,.38-1.03,.47-1.4-.07-.19-.27-.17-.89,.02-1.17,.84-1.2,1.83-2.29,2.67-3.5,3.19-4.62,6.32-9.28,9.51-13.9,2.74-3.99,5.52-7.94,8.28-11.92,.29-.42,.65-.82,.84-1.3,.29-.71-.84-.86-1.19-.89-4.8-.35-9.6-.73-14.41-1.04-4.11-.26-8.17-.08-12.1,.96-2.56,.67-5.01,1.61-7.02,3.29-1.17,.98-2.26,2.15-3.06,3.44-1.22,1.98-.86,4.06,.76,5.94,1.63,1.89,3.72,2.94,6.1,3.35,3.42,.59,6.52-.19,9.36-1.86,2.42-1.42,4.36-3.36,6.03-5.59,.43-.57,2.44-3.38,2.87-1.09,.21,1.12-1.57,2.79-2.21,3.56-.92,1.12-1.93,2.17-3.04,3.1-2.26,1.89-4.94,3.22-7.89,3.79-3.57,.69-7.06,.24-10.31-1.89-1.4-.92-2.58-2.05-3.4-3.53-1.26-2.26-1.26-4.49-.18-6.65,1.07-2.15,2.78-3.72,4.78-4.99,3.35-2.12,7.1-3.2,11.08-3.65,4.4-.5,8.85-.24,13.3,.29Z"/>
                                <path className="cls-1" d="M124.88,28.98s0-.04,0-.07c-.08-1.22,.51-2.24,.95-3.3,.34-.83,.75-1.63,1.14-2.43,.2-.41,.39-.82,.57-1.24,.12-.29,.4-1.19-.11-1.3-.31-.07-.77,.25-.97,.45-1.07,1.11-2.13,2.25-3.08,3.47-1.12,1.42-2.5,2.93-3.4,4.52-.58,1.03-1.81,.79-1.53-.6,.04-.19,.25-.94-.13-.93-.29,0-.67,.57-.83,.75-1.45,1.63-4.87,3.22-6.45,.58-.17-.29-.31-.6-.42-.91-.12-.34-.1-.71-.21-1.06-.2-.69-.6-.81-1.16-.33-.59,.51-1.08,1.14-1.72,1.56-.93,.61-1.89,1.25-2.94,1.57-1.79,.54-3.21-.72-3.08-2.62,.04-.6,.23-1.21,.46-1.76,1.12-2.65,2.99-4.63,5.54-5.93,1.43-.73,3.02-1.18,4.5,.06,1.38,1.16,1.18,2.73,.92,4.24-.18,1.03-.4,2.07-.42,3.12,0,.62,.31,1.3,1,1.39,.86,.11,1.79-.62,2.41-1.11,1.69-1.34,2.56-3.34,3.57-5.21,.36-.66,.45-1.94,1.51-1.81,.74,.09,1.05,.83,.39,2.71-.51,1.46,2.3-1.98,2.68-2.37,1.75-1.78,3.08-2.24,4.06-2.49,1.56-.39,2.67,.79,2.26,2.35-.26,1.01-.75,1.94-1.18,2.89-.63,1.43-1.3,2.84-1.94,4.26-.21,.46-.34,.92-.3,1.45,.08,.88,.91,1.01,1.54,.66,2.06-1.12,3.4-3.13,4.91-4.88,.21-.24,.42-.49,.7-.63,.9-.47,1.42,.45,1.12,1.24-.14,.37-.42,.63-.63,.95-.19,.29-.37,.59-.57,.88-.44,.61-.9,1.21-1.4,1.77-1.28,1.41-3.34,3.66-5.57,3.03-1.35-.38-2.09-1.6-2.21-2.92Zm-14.2-7.82c-.24-.52-1.49-.15-1.82-.02-.7,.29-1.38,.68-1.99,1.12-.74,.54-4.91,5-2.44,5.32,1.25,.16,3.5-2.22,4.23-2.96,.9-.92,1.99-2.85,2.04-3.06,.04-.17,.03-.3-.01-.4Z"/>
                              </g>
                              <g>
                                <path className="cls-1" d="M143.04,26.25c1.01,1.05,2.57,1.93,4.53,1.93,1.67,0,2.48-.79,2.48-1.6,0-1.07-1.24-1.43-2.89-1.82-2.33-.53-5.33-1.18-5.33-4.36,0-2.37,2.05-4.3,5.41-4.3,2.27,0,4.15,.68,5.56,1.99l-1.69,2.22c-1.16-1.07-2.7-1.56-4.09-1.56s-2.1,.6-2.1,1.45c0,.96,1.2,1.26,2.84,1.65,2.35,.53,5.35,1.24,5.35,4.41,0,2.61-1.86,4.58-5.71,4.58-2.74,0-4.71-.92-6.05-2.27l1.67-2.31Z"/>
                                <path className="cls-1" d="M165.82,24.58h-6.74v5.99h-3.04v-14.27h3.04v5.6h6.74v-5.6h3.06v14.27h-3.06v-5.99Z"/>
                                <path className="cls-1" d="M172.54,16.3h10.1v2.61h-7.06v3.1h6.91v2.61h-6.91v3.32h7.06v2.63h-10.1v-14.27Z"/>
                                <path className="cls-1" d="M185.87,16.3h10.1v2.61h-7.06v3.1h6.91v2.61h-6.91v3.32h7.06v2.63h-10.1v-14.27Z"/>
                                <path className="cls-1" d="M208.97,24.58h-6.74v5.99h-3.04v-14.27h3.04v5.6h6.74v-5.6h3.06v14.27h-3.06v-5.99Z"/>
                                <path className="cls-1" d="M219.66,24.73l-5.5-8.43h3.47l3.55,5.73,3.51-5.73h3.47l-5.45,8.43v5.84h-3.04v-5.84Z"/>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </figure>
                  </div>
                  <div className="space-y-6 mt-10">
                    <p className="flex space-x-1 justify-center items-center text-sm text-center text-gray-400">
                      <span>
                        ©{new Date().getFullYear()} Meagan Sheehy Coaching All rights reserved.
                      </span>
                      <span className="inline-block leading-0">
                        <a className="text-gray-400" href="https://www.modiphy.com/" target="_blank" rel="noreferrer" title="MODIPHY® DESIGN Logo | The True You Therapy &amp; Wellness - Psychotherapy Services">
                          <svg
                            className="h-6 w-6 fill-current"
                            version="1.1"
                            id="Foreground"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 74.3 74.3"
                            style={{ enableBackground: "new 0 0 74.3 74.3" }}
                            xmlSpace="preserve"
                            role="img"
                            aria-labelledby="modiphy-logo-title"
                          >
                            <title id="modiphy-logo-title text-gray-100">MODIPHY® DESIGN - Meagan Sheehy Coaching - Lifestyle and Mindset Coaching</title>
                            <path
                              className="path"
                              d="M74.3,28.2c0-4.6-8.3-8.5-19.5-9.6c3.7-6.2,4.8-11.6,2.3-14c-3.3-3.3-11.9-0.2-20.6,7C34.7,4.6,31.7,0,28.2,0
                  c-4.6,0-8.5,8.3-9.6,19.5c-6.2-3.7-11.6-4.8-14-2.3c-3.3,3.3-0.2,11.9,7,20.6C4.6,39.5,0,42.6,0,46c0,4.6,8.3,8.5,19.5,9.6
                  c-3.7,6.2-4.8,11.6-2.3,14c3.3,3.3,11.9,0.2,20.6-7c1.8,7,4.8,11.6,8.3,11.6c4.6,0,8.5-8.3,9.6-19.5c6.2,3.7,11.6,4.8,14,2.3
                  c3.3-3.3,0.2-11.9-7-20.6C69.7,34.7,74.3,31.7,74.3,28.2z M61.1,45.5c-3.9,3.9-14.1,0.1-24-8.4c2,2.9,4.4,5.8,7.3,8.7
                  c3.5,3.5,7.1,6.3,10.5,8.5C53,57.9,50.7,60,48.1,60c-5.5,0-10.1-9.9-11-22.9c-0.6,3.4-1,7.3-1,11.3c0,4.9,0.5,9.5,1.4,13.4
                  c-3.9,1.2-7,1-8.8-0.8c-3.9-3.9-0.1-14.1,8.4-24c-2.9,2-5.8,4.4-8.7,7.3c-3.5,3.5-6.4,7.1-8.5,10.5c-3.6-1.9-5.7-4.2-5.7-6.8
                  c0-5.5,9.9-10.1,22.9-11c-3.4-0.6-7.2-1-11.3-1c-4.9,0-9.5,0.5-13.4,1.4c-1.2-3.9-1-7,0.8-8.9c3.9-3.9,14.1-0.1,24,8.4
                  c-2-2.9-4.4-5.8-7.3-8.7c-3.5-3.5-7.1-6.4-10.5-8.5c1.9-3.6,4.2-5.7,6.8-5.7c5.5,0,10.1,9.9,11,22.9c0.6-3.4,1-7.3,1-11.3
                  c0-4.9-0.5-9.5-1.4-13.4c3.9-1.2,7-1,8.9,0.8c3.9,3.9,0.1,14.1-8.4,24c2.9-2,5.8-4.4,8.7-7.3c3.5-3.5,6.4-7.1,8.5-10.5
                  c3.6,1.9,5.7,4.2,5.7,6.8c0,5.5-9.9,10.1-22.9,11c3.4,0.6,7.3,1,11.3,1c4.9,0,9.5-0.5,13.4-1.4C63.1,40.6,62.9,43.7,61.1,45.5z"
                            ></path>
                          </svg>
                        </a>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="grid lg:justify-items-end">
                    {
                    (!_.get(this.props.pageContent, 'hideFooterLocationInfo') && locationInfo && locationInfo.length > 0) && (
                      <div className={`space-y-6 lg:space-y-0 lg:flex ${this.props.removeContactUs ? 'lg:justify-center lg:space-x-48' : 'lg:justify-between'} text-center lg:text-left`}>
                        {
                          locationInfo.map(item => {
                            const componentName = sectionsComponent(item)
                            const ComponentType = FooterSection[formatComponentName(componentName)]

                            if (ComponentType) {
                              if (!(this.props.removeContactUs && formatComponentName(componentName) === 'ContactUs')) {
                                return <ComponentType data={item} key={item.name} location={_.first(this.props.location)} styles="grid justify-center"/>
                              }
                            }
                          })
                        }
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}
 
export default Footer;